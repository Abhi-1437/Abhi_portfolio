# Contact Form Setup Instructions

## How to Enable Contact Form Submissions

Your portfolio now has a functional contact form with success/error messages. To make it work, you need to set up a free Web3Forms account:

### Step 1: Get Your Access Key

1. Go to https://web3forms.com
2. Click "Get Started" or "Create Access Key"
3. Enter your email address (kunigiriabhishek@gmail.com)
4. You'll receive an access key via email

### Step 2: Add Your Access Key

1. Open `src/components/Contact.jsx`
2. Find line 56: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key
4. Save the file

### Example:
```javascript
access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
```

### Features Included:

✅ Form validation (all fields required)
✅ Loading spinner while submitting
✅ Success message with green neon styling
✅ Error message with red styling
✅ Auto-clear messages after 5 seconds
✅ Form reset after successful submission
✅ Disabled button during submission
✅ Direct email fallback in error message

### Alternative: Use EmailJS

If you prefer EmailJS instead:

1. Go to https://www.emailjs.com
2. Create a free account
3. Set up an email service
4. Create an email template
5. Replace the fetch code with EmailJS SDK

### Testing:

1. Fill out the form with test data
2. Click "Send Message"
3. You should see a loading spinner
4. Then a success message appears
5. Form fields clear automatically
6. Message disappears after 5 seconds

### Troubleshooting:

- If you see an error, check your access key
- Make sure you're connected to the internet
- Check browser console for any errors
- Verify the access key is active on Web3Forms dashboard

### Email Notifications:

All form submissions will be sent to: kunigiriabhishek@gmail.com

You can customize the email template and add more fields in the Web3Forms dashboard.
