import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
    });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      whatsapp,
      country,
      date,
      time,
      goals,
      plan,
    } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "a2004gn@gmail.com",
      subject: "New Booking - Acento Spanish School",
      html: `
        <h2>New Booking Request</h2>

        <p><strong>Plan:</strong> ${plan}</p>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>WhatsApp:</strong> ${whatsapp}</p>

        <p><strong>Country:</strong> ${country}</p>

        <p><strong>Date:</strong> ${date}</p>

        <p><strong>Time:</strong> ${time}</p>

        <p><strong>Learning Goals:</strong></p>

        <p>${goals}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error: any) {
    console.error("BOOKING ERROR:", error);

    return res.status(500).json({
      success: false,
      error: error?.message,
      details: error,
    });
  }
}
