# Media Optimization Guide

## 🚨 Current Issues

Your site is loading **156MB** of media files, with the main bottlenecks being:

- `hero.mp4`: 40MB
- `easy.mp4`: 18MB  
- `DSC_4358.jpg`: 10MB
- `6_Photo - 4 (1).jpg`: 10MB
- Multiple other 5-10MB images

**GZIP compression doesn't help with videos and images** - they're already compressed formats. You need to optimize the source files.

## ✅ Optimizations Already Applied

1. **Lazy Loading**: Videos and images now only load when near viewport
2. **Preload Optimization**: Critical assets load first, others deferred
3. **Resource Hints**: DNS prefetching for external services
4. **Code Splitting**: GZIP + Brotli compression for JS/CSS (75% reduction)

## 🎯 Required: Video Compression

### Option 1: Install FFmpeg (Recommended)

```bash
# macOS
brew install ffmpeg

# Then compress videos:
cd public

# Compress hero.mp4 (40MB → ~5MB)
ffmpeg -i hero.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart hero_optimized.mp4

# Compress easy.mp4 (18MB → ~3MB)
ffmpeg -i easy.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart easy_optimized.mp4

# Compress The_ground_is video
ffmpeg -i The_ground_is_202507161756.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart The_ground_is_optimized.mp4

# After verifying quality, replace originals:
mv hero_optimized.mp4 hero.mp4
mv easy_optimized.mp4 easy.mp4
mv The_ground_is_optimized.mp4 The_ground_is_202507161756.mp4
```

**CRF values**:
- 23 = High quality (~10MB for hero.mp4)
- 28 = Good quality (~5MB for hero.mp4) ← Recommended
- 32 = Lower quality (~3MB for hero.mp4)

### Option 2: Online Tool (No Install)

1. Visit: https://www.freeconvert.com/video-compressor
2. Upload your videos
3. Set target size to 5-10MB
4. Download and replace in `/public` folder

### Option 3: HandBrake (GUI App)

1. Download: https://handbrake.fr/
2. Import videos
3. Preset: "Web" → "Discord Nitro Large 3 Minute 5-10MB 1080p30"
4. Export and replace

## 🎯 Required: Image Compression

### Convert JPG to WebP (70-90% size reduction)

```bash
# Install tools
brew install webp imagemagick

cd public

# Convert large JPGs to WebP
cwebp -q 80 "DSC_4358.jpg" -o "DSC_4358.webp"
cwebp -q 80 "6_Photo - 4 (1).jpg" -o "6_Photo - 4 (1).webp"
cwebp -q 80 "6_Photo - 3 (2).jpg" -o "6_Photo - 3 (2).webp"
cwebp -q 80 "6_Photo - 2 (2).jpg" -o "6_Photo - 2 (2).webp"
cwebp -q 80 "6_Photo - 1 (2).jpg" -o "6_Photo - 1 (2).webp"

# Or batch convert all large JPGs:
for file in *.jpg *.JPG; do
  if [ -f "$file" ]; then
    cwebp -q 80 "$file" -o "${file%.*}.webp"
  fi
done
```

### Then update your components to use WebP:

```tsx
// Before
<img src="/6_Photo - 4 (1).jpg" alt="..." />

// After (with fallback)
<picture>
  <source srcSet="/6_Photo - 4 (1).webp" type="image/webp" />
  <img src="/6_Photo - 4 (1).jpg" alt="..." />
</picture>
```

### Online Alternative:

1. Visit: https://squoosh.app/
2. Drag images
3. Choose WebP format, quality 80
4. Download and replace

## 📊 Expected Results After Optimization

| Asset | Current | Optimized | Savings |
|-------|---------|-----------|---------|
| hero.mp4 | 40MB | 5-8MB | 80-85% |
| easy.mp4 | 18MB | 3-5MB | 75-80% |
| The_ground_is video | ? | 3-5MB | ~75% |
| All images (WebP) | 50MB+ | 8-12MB | 75-80% |
| **Total Site** | **156MB** | **20-30MB** | **80-85%** |

## ✅ Quick Wins Checklist

- [x] Enable GZIP/Brotli for JS/CSS
- [x] Add lazy loading to videos
- [x] Add lazy loading to images  
- [x] Add resource hints
- [ ] **Compress hero.mp4 to under 8MB**
- [ ] **Compress easy.mp4 to under 5MB**
- [ ] **Convert large JPGs to WebP**
- [ ] **Test on deployed site**

## 🚀 Deploy & Test

After optimizing:

```bash
npm run build
git add .
git commit -m "Optimize media files for performance"
git push
```

Then test on your live site:
1. Open DevTools → Network tab
2. Filter by "Media"
3. Check file sizes
4. Verify `Content-Encoding: br` or `gzip` on JS/CSS
5. Run Lighthouse audit (should score 90+ on Performance)

## 📝 Notes

- Videos should be under 10MB each
- Images should be under 500KB each (preferably under 200KB)
- Use WebP for photos, PNG for logos/graphics
- Keep poster images under 200KB
- First contentful paint target: < 1.5s

