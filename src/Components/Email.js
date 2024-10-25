import React, { useState } from 'react';

function Email() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ success: false, error: false, message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz3Z7Rh71zhgYjPE36xQWKSuhG0ehLFZWKrLpM6xDtGthBmO9cP_tL04i3LjPEjhmvX/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Use form-urlencoded
                },
                body: new URLSearchParams({ email }), // Send email as form-encoded
            });

            const result = await response.text(); // Capture the response text

            if (response.ok) {
                console.log('Email submitted successfully!');
                setStatus({ success: true, error: false, message: 'Email submitted successfully!' }); // Set success message
                setEmail(''); // Clear the input field
            } else {
                console.error('Failed to submit email:', result); // Log the error
                setStatus({ success: false, error: true, message: result }); // Set error message
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ success: false, error: true, message: 'There was an error submitting your email. Please try again.' }); // Set error message
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
