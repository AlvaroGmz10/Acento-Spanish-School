import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

function adminEmailTemplate(data: any) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 700px; margin: auto;">
      <h1 style="color: #f97316;">New Booking Request</h1>

      <hr>

      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
      <p><strong>Country:</strong> ${data.country}</p>
      <p><strong>Plan:</strong> ${data.plan}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>

      <hr>

      <h2>Learning Goals</h2>

      <p>${data.goals || "No goals provided."}</p>
    </div>
  `;
}

function studentEmailTemplate(data: any) {
  return `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 650px;
      margin: auto;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden;
    ">
      <div style="
        background: #f97316;
        color: white;
        text-align: center;
        padding: 30px;
      ">
        <h1 style="margin: 0;">
          Welcome to Acento Spanish School 🇨🇴
        </h1>
      </div>

      <div style="padding: 30px;">

        <p>Hello <strong>${data.firstName}</strong>,</p>

        <p>
          Thank you for booking your Spanish classes with us.
        </p>

        <p>
          We have received your request and will contact you shortly to confirm your schedule.
        </p>

        <div style="
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        ">
          <p><strong>Selected Plan:</strong> ${data.plan}</p>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Preferred Time:</strong> ${data.time}</p>
        </div>

        <p>
          We look forward to helping you improve your Spanish while experiencing the culture of Cartagena.
        </p>

        <p>See you soon!</p>

        <br>

        <strong>Acento Spanish School</strong>

      </div>
    </div>
  `;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      firstName = "",
      lastName = "",
      email = "",
      whatsapp = "",
      country = "",
      date = "",
      time = "",
      goals = "",
      plan = "",
    } = req.body;

    const cleanEmail = String(email).trim();

    if (!cleanEmail) {
      return res.status(400).json({
        success: false,
        error: "Email is required",
      });
    }

    const bookingData = {
      firstName,
      lastName,
      email: cleanEmail,
      whatsapp,
      country,
      date,
      time,
      goals,
      plan,
    };

    console.log("BOOKING DATA:", bookingData);

    // ADMIN EMAIL

    console.log("Sending admin email...");

    const adminResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "acentospanishschool@gmail.com",
      subject: `New Booking - ${firstName} ${lastName}`,
      html: adminEmailTemplate(bookingData),
    });

    console.log("ADMIN RESULT:", adminResult);

    if (adminResult.error) {
      console.error("ADMIN EMAIL ERROR:", adminResult.error);
    }

    // STUDENT EMAIL

    console.log("Sending student email to:", cleanEmail);

    const studentResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: cleanEmail,
      subject: "Your booking request has been received",
      html: studentEmailTemplate(bookingData),
    });

    console.log("STUDENT RESULT:", studentResult);

    if (studentResult.error) {
      console.error("STUDENT EMAIL ERROR:", studentResult.error);
    }

    return res.status(200).json({
      success: true,
      adminEmailSent: !adminResult.error,
      studentEmailSent: !studentResult.error,
    });
  } catch (error: any) {
    console.error("BOOKING ERROR:", error);

    return res.status(500).json({
      success: false,
      error: error?.message || "Unknown error",
    });
  }
}
