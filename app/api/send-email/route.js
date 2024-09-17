// pages/api/send-email.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    // if (req.method == 'POST') {


    try {
        const { to, subject, text } = await request.json();

        // Create a Nodemailer transporter using SMTP transport
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASS
            }
        });

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "mnurfaiz26@gmail.com",
            subject,
            text,
            html: `<h1>${text}</h1>`,
        };

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: "Success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed " + error }, { status: 500 })
    }
    // try {
    //     // Send the email
    //     await transporter.sendMail(mailOptions);
    //     res.status(200).json({ message: 'Email sent successfully' });
    // } catch (error) {
    //     res.status(500).json({ message: 'Error sending email', error: error.message });
    // }
    // } else {
    //     // Only allow POST requests
    //     res.setHeader('Allow', ['POST']);
    //     res.status(405).end(`Method ${req.method} Not Allowed`);
    // }
}
