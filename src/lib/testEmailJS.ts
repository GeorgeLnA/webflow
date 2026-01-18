import emailjs from '@emailjs/browser';

// Test EmailJS connection
export const testEmailJSConnection = async () => {
  try {
    // Test with a simple email
    const result = await emailjs.send(
      'service_wae3rzs', // Your service ID
      'template_o1r6i88', // Your template ID
      {
        from_name: 'Test User',
        from_email: 'test@example.com',
        phone: '123-456-7890',
        company: 'Test Company',
        project_description: 'This is a test email',
        form_type: 'contact',
        to_email: 'matt@infinitespa.co',
        to_name: 'Matt',
      }
    );
    
    console.log('EmailJS test successful:', result);
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS test failed:', error);
    return { success: false, error };
  }
};

// Call this function to test the connection
// testEmailJSConnection();
