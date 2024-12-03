const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files like your HTML and CSS

// Create a transport object for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
        user: 'armitage5steam@gmail.com', // Replace with your email address
        pass: 'your-email-password'    // Replace with your email password or app password
    }
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, event, date, tickets } = req.body;

    const mailOptions = {
        from: 'armitage5steam@gmail.com',
        to: 'armitage5steam@gmail.com', // Your email address to receive the booking
        subject: 'New Ticket Booking Request',
        text: `
            Booking Details:
            Name: ${name}
            Email: ${email}
            Event: ${event}
            Date: ${date}
            Number of Tickets: ${tickets}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.send('Email sent: ' + info.response);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
