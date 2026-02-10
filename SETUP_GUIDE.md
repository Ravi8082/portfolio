# Portfolio Website Setup Guide

## 🚀 Quick Start

Your portfolio website is now running at: http://localhost:3000

## 📧 Contact Form Setup

### Current Status (Development Mode)
- Contact form submissions are logged to the server console
- No email delivery yet (working in development mode)

### To Enable Email Delivery:

1. **Get a Web3Forms API Key:**
   - Visit: https://web3forms.com/
   - Sign up for a free account
   - Get your API access key

2. **Update Environment Variables:**
   - Open `.env.local` file
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual API key
   - Save the file

3. **Restart Development Server:**
   - Stop the current server (Ctrl+C)
   - Run: `npm run dev`

### How It Works:
- **Development Mode**: Form submissions appear in server console
- **Production Mode**: Real emails sent to palravi1093@gmail.com

## 📄 Resume Download Fix

### Issue Fixed:
- Resume now opens properly in the browser instead of just downloading
- Uses proper PDF serving with correct headers
- Works on all devices and browsers

### How to Test:
1. Visit http://localhost:3000
2. Click any "Download Resume" button
3. Resume should open in a new browser tab

## 🔧 Technical Changes Made

### Contact Form (`app/api/contact/route.ts`):
- Added email validation
- Improved error handling
- Better logging for development
- Proper Web3Forms integration

### Resume Download:
- Created `/api/resume` endpoint for proper PDF serving
- Updated all resume links to use the new API
- Added proper HTTP headers for PDF files
- Changed from `download` to `target="_blank"` for better UX

### Environment Configuration:
- Added `.env.local` with Web3Forms setup instructions
- Clear documentation for development vs production modes

## 🎯 Testing

### Contact Form Test:
1. Go to http://localhost:3000/contact
2. Fill out the form with:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test message
3. Submit the form
4. Check server console for the logged submission

### Resume Download Test:
1. Visit any page with a "Download Resume" button
2. Click the button
3. Resume should open in a new browser tab

## 📝 Next Steps

1. **For Email Functionality**: Get your Web3Forms API key and update `.env.local`
2. **Deploy**: When ready, deploy to Vercel or your preferred hosting platform
3. **Customize**: Update content in the components to match your personal information

## 🆘 Troubleshooting

### Contact Form Issues:
- Check server console for error messages
- Verify Web3Forms API key is correct
- Ensure all required fields are filled

### Resume Issues:
- Make sure `RaviPal-Resume.pdf` exists in the `public` folder
- Check browser console for any errors
- Try refreshing the page

### Development Server Issues:
- Make sure Node.js is installed
- Run `npm install` if dependencies are missing
- Check that port 3000 is available

## 📞 Support

For any issues, check the server console output or browser developer tools for detailed error messages.