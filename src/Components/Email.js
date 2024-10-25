import React, { useState } from 'react';

function Email() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ success: false, error: false, message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxURJfoC766tbC5MJcRQ37A8Oe5IJ1wEeOfKd5DjmWTMM8F6L-r384u3Sx2f0kqX300/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ email }), // Send email as form-encoded
            });

            const result = await response.text(); // Capture the response text

            if (response.ok) {
                console.log('Email submitted successfully!');
                setStatus({ success: true, error: false, message: 'Email submitted successfully!' });
                setEmail(''); // Clear the input field
            } else {
                console.error('Failed to submit email:', result);
                setStatus({ success: false, error: true, message: result });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ success: false, error: true, message: 'There was an error submitting your email. Please try again.' });
        }
    };

    return (
        <form className='flex-column' onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
                Be the FIRST to know about our merch release!
            </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="Enter email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                style={{ marginTop: "10px", marginBottom: "10px", padding: "8px", width: "100%" }} // Basic styling
            />
            <button style={{ marginTop: "10px", marginBottom: "10px" }} type="submit">Submit</button>

            {status.success && <p style={{ color: 'green' }}>{status.message}</p>}
            {status.error && <p style={{ color: 'red' }}>{status.message}</p>}
        </form>
    );
}

export default Email;
