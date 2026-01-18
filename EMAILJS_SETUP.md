# EmailJS Setup Guide

This guide will help you set up EmailJS to receive email notifications when forms are submitted.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New {{form_type}} Form Submission - Infinite Spa

Hello Infinite Spa Team,

You have received a new {{form_type}} form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Project Description: {{project_description}}

Form Type: {{form_type}}

Additional Data: {{additional_data}}

Best regards,
Infinite Spa Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Configuration

1. Open `/src/lib/emailjs.ts`
2. Replace the placeholder values with your actual IDs:

```typescript
const EMAILJS_SERVICE_ID = 'service_wae3rzs'; // ✅ Already set
const EMAILJS_TEMPLATE_ID = 'template_o1r6i88'; // ✅ Already set
const EMAILJS_PUBLIC_KEY = 'ZmV7pTaXw3-gYXzYpI-Ss'; // ✅ Already set
```

**Current Status:**
- ✅ Service ID: `service_wae3rzs` (already configured)
- ✅ Public Key: `ZmV7pTaXw3-gYXzYpI-Ss` (already configured)
- ✅ Template ID: `template_o1r6i88` (already configured)
- ✅ Email Recipients: `matt@infinitespa.co` and `georgeemh@gmail.com` (already configured)

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to the Contact page and submit a test form
3. Check your email for the notification
4. Check the browser console for any errors

## Troubleshooting

- Make sure all three IDs are correctly set
- Check that your email service is properly configured
- Verify the template variables match the ones in the code
- Check browser console for detailed error messages

## Email Notifications

You will receive emails for:
- Contact form submissions
- Dealer applications
- Booking inquiries

All form data is also saved to your Supabase database for backup.
