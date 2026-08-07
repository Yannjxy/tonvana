import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      service,
      preferredDate,
      address,
      city,
      postalCode,
      pianoBrand,
      pianoType,
      lastTuned,
      notes,
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // ===========================
    // Email #1 - Admin Notification
    // ===========================

    const { data, error } = await resend.emails.send({
      from: "Tonvana <info@tonvana.com>",
      to: "chrisyanjia@gmail.com",
      replyTo: email,
      subject: `🎹 New Booking Request - ${fullName}`,
      html: `
        <h2>New Piano Service Booking</h2>

        <hr>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr>

        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>

        <hr>

        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>

        <hr>

        <p><strong>Piano Brand:</strong> ${pianoBrand}</p>
        <p><strong>Piano Type:</strong> ${pianoType}</p>
        <p><strong>Last Tuned:</strong> ${lastTuned}</p>

        <hr>

        <p><strong>Notes</strong></p>

        <p>${notes || "None"}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Email sending failed.",
        },
        {
          status: 500,
        }
      );
    }

    console.log(data);

    // ===========================
    // Email #2 - Customer Confirmation
    // ===========================

    await resend.emails.send({
      from: "Tonvana <info@tonvana.com>",
      to: email,

      subject: "We've received your booking request",

      html: `
      <div style="
        max-width:650px;
        margin:auto;
        padding:30px;
        font-family:Arial,Helvetica,sans-serif;
        line-height:1.8;
        color:#333;
      ">

        <h1 style="color:#B58A2B;">
          Thank You!
        </h1>

        <p>Hi ${fullName},</p>

        <p>
          Thank you for choosing <strong>Tonvana</strong>.
        </p>

        <p>
          We have successfully received your booking request.
        </p>

        <p>
          We will contact you within
          <strong>24 hours</strong>
          to confirm your appointment.
        </p>

        <hr>

        <h2>Your Request</h2>

        <p><strong>Service:</strong> ${service}</p>

        <p><strong>Preferred Date:</strong> ${preferredDate}</p>

        <p><strong>Piano:</strong> ${pianoBrand} ${pianoType}</p>

        <hr>

        <h2>Business Hours</h2>

        <p>
          Tuesday – Saturday<br>
          9:00 AM – 5:00 PM
        </p>

        <h2>Need Immediate Assistance?</h2>

        <p>
          Phone:
          <strong>431-728-8688</strong>
        </p>

        <br>

        <p>
          Thank you again for trusting Tonvana.
        </p>

        <p>
          <strong>Tonvana</strong><br>
          Professional Piano Tuning & Instrument Care
        </p>

      </div>
      `,
    });

    // ===========================
    // Server Log
    // ===========================

    console.log("=================================");
    console.log("NEW BOOKING REQUEST");
    console.log("=================================");
    console.log({
      fullName,
      email,
      phone,
      service,
      preferredDate,
      address,
      city,
      postalCode,
      pianoBrand,
      pianoType,
      lastTuned,
      notes,
    });
    console.log("=================================");

    return NextResponse.json({
      success: true,
      message: "Booking request received.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}