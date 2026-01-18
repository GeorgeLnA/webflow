# EmailJS Template Content

Use this content when creating your email template in the EmailJS dashboard:

## Subject Line
```
New {{form_type}} Form Submission - Infinite Spa
```

## HTML Template (Simplified Version)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Form Submission - Infinite Spa</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f8f9fa;
            line-height: 1.6;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #0b1c26 0%, #1a2f3f 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .logo {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        
        .tagline {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .alert-badge {
            background-color: #10b981;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 30px;
        }
        
        .submission-title {
            font-size: 24px;
            color: #0d0c09;
            margin-bottom: 30px;
            font-weight: 500;
        }
        
        .form-details {
            background-color: #f8f9fa;
            border-left: 4px solid #0b1c26;
            padding: 25px;
            margin-bottom: 30px;
            border-radius: 0 8px 8px 0;
        }
        
        .detail-row {
            display: flex;
            margin-bottom: 15px;
            align-items: flex-start;
        }
        
        .detail-row:last-child {
            margin-bottom: 0;
        }
        
        .detail-label {
            font-weight: 600;
            color: #0b1c26;
            min-width: 120px;
            margin-right: 15px;
            font-size: 14px;
        }
        
        .detail-value {
            color: #374151;
            flex: 1;
            font-size: 14px;
        }
        
        .form-type-badge {
            background-color: #0b1c26;
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .actions {
            text-align: center;
            margin-top: 40px;
        }
        
        .action-button {
            display: inline-block;
            background-color: #0b1c26;
            color: white;
            text-decoration: none;
            padding: 12px 30px;
            border-radius: 4px;
            font-weight: 600;
            margin: 0 10px;
            transition: background-color 0.3s ease;
        }
        
        .action-button:hover {
            background-color: #1a2f3f;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }
        
        .footer-text {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 10px;
        }
        
        .footer-links {
            margin-top: 15px;
        }
        
        .footer-links a {
            color: #0b1c26;
            text-decoration: none;
            margin: 0 10px;
            font-size: 14px;
        }
        
        .footer-links a:hover {
            text-decoration: underline;
        }
        
        .timestamp {
            color: #9ca3af;
            font-size: 12px;
            margin-top: 20px;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 0;
                box-shadow: none;
            }
            
            .header, .content, .footer {
                padding: 20px;
            }
            
            .detail-row {
                flex-direction: column;
            }
            
            .detail-label {
                margin-bottom: 5px;
                min-width: auto;
            }
            
            .action-button {
                display: block;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo">New Form Submission</div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <h1 class="submission-title">You've received a new {{form_type}} submission</h1>
            
            <div class="form-details">
                <div class="detail-row">
                    <div class="detail-label">Form Type:</div>
                    <div class="detail-value">
                        <span class="form-type-badge">{{form_type}}</span>
                    </div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">Name:</div>
                    <div class="detail-value">{{from_name}}</div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">Email:</div>
                    <div class="detail-value">
                        <a href="mailto:{{from_email}}" style="color: #0b1c26; text-decoration: none;">{{from_email}}</a>
                    </div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">Phone:</div>
                    <div class="detail-value">{{phone}}</div>
                </div>
                
            </div>
            
            
            <div class="timestamp">
                Received on {{timestamp}}
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-text">
                This notification was sent from your Infinite Spa website contact form.
            </div>
            <div class="footer-links">
                <a href="https://infinitespa.co">Visit Website</a>
                <a href="https://infinitespa.co/admin">Admin Dashboard</a>
                <a href="mailto:info@infinitespa.co">Contact Support</a>
            </div>
        </div>
    </div>
</body>
</html>
```

## Template Variables Used
- `{{form_type}}` - Type of form (CONTACT, DEALER, BOOKING)
- `{{from_name}}` - Submitter's name
- `{{from_email}}` - Submitter's email
- `{{phone}}` - Submitter's phone number
- `{{company}}` - Company name (for dealer forms)
- `{{project_description}}` - Message/project description
- `{{additional_data}}` - Additional form data (JSON formatted)
- `{{timestamp}}` - When the form was submitted

## Instructions
1. Go to your EmailJS dashboard
2. Create a new email template
3. Copy the HTML content above
4. Save the template and note the Template ID
5. Update `/src/lib/emailjs.ts` with your Template ID
