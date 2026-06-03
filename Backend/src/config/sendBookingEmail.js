// import { transporter } from "../config/mail.config.js";
// import QRCode from "qrcode";

// export const sendBookingEmail = async (user, slot, seatNumbers, booking) => {
//   try {
//     // 🔥 QR DATA
//     const qrData = `
//     Booking Code: ${bookingCode}
// Booking ID: ${booking._id}
// Name: ${user.firstName}
// Date: ${new Date(slot.date).toDateString()}
// Time: ${slot.startTime} - ${slot.endTime}
// Seats: ${seatNumbers.join(", ")}
// Slot Type: ${booking.slotType}
// `;

//     // 🔥 Generate QR Buffer (BEST FOR GMAIL)
//     const qrBuffer = await QRCode.toBuffer(qrData, {
//       errorCorrectionLevel: "H",
//       type: "png",
//       width: 300,
//     });

//     // 🔥 CLEAN MOBILE FRIENDLY HTML
//     const html = `
//     <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
      
//       <div style="max-width:500px; margin:auto; background:#ffffff; border-radius:10px; padding:20px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        
//         <h2 style="text-align:center; color:#333;">🎟️ Booking Confirmed</h2>
        
//         <p style="font-size:16px; color:#555;">
//           Hi <strong>${user.firstName}</strong>,<br/><br/>
//           Your canteen slot has been <strong>successfully booked</strong>.
//         </p>

//         <div style="margin-top:20px; padding:15px; background:#f9fafb; border-radius:8px;">
          
//           <p><strong>📅 Date:</strong> ${new Date(slot.date).toDateString()}</p>
//           <p><strong>⏰ Time:</strong> ${slot.startTime} - ${slot.endTime}</p>
//           <p><strong>🎫 Seats:</strong> ${seatNumbers.join(", ")}</p>
//           <p><strong>🛒 Slot Type:</strong> ${booking.slotType?.toUpperCase()}</p>
//           <p><strong>👥 Total Seats:</strong> ${booking.seat}</p>
//           <p><strong>🏷️ Category:</strong> ${slot.category || "All"}</p>
//           <p><strong>🆔 Booking ID:</strong> ${booking._id
//             .toString()
//             .slice(-6)}</p>

//         </div>

//         <div style="text-align:center; margin-top:25px;">
//           <p style="font-weight:bold;">Scan this QR at the canteen:</p>
//           <img src="cid:qrCodeImage" style="width:200px;" />
//         </div>

//         <p style="margin-top:20px; font-size:14px; color:#888; text-align:center;">
//           Please arrive on time and show this QR code for entry.
//         </p>

//       </div>
//     </div>
//     `;

//     // 🔥 SEND MAIL
//     await transporter.sendMail({
//       from: process.env.SMTP_MAIL_FROM,
//       to: user.email,
//       subject: "🎟️ Canteen Slot Booking Confirmation",
//       html,

//       attachments: [
//         {
//           filename: "qr.png",
//           content: qrBuffer,
//           cid: "qrCodeImage", // IMPORTANT
//         },
//       ],
//     });

//     console.log("✅ Booking email sent");

//   } catch (error) {
//     console.error("❌ Email Error:", error.message);
//   }
// };




import { transporter } from "../config/mail.config.js";
import QRCode from "qrcode";
export const sendBookingEmail = async (user, slot, seatNumbers, booking) => {
  try {
    const qrBuffer = Buffer.from(booking.qrCode, "base64");

    const html = `
    <div style="font-family: Arial;">
      <h2>🎟️ Booking Confirmed</h2>

      <p>Hi ${user.firstName}</p>

      <p><b>Booking Code:</b> ${booking.bookingId}</p>
      <p><b>Date:</b> ${new Date(slot.date).toDateString()}</p>
      <p><b>Time:</b> ${slot.startTime} - ${slot.endTime}</p>
      <p><b>Seats:</b> ${seatNumbers.join(", ")}</p>

      <img src="cid:qrCodeImage" width="200"/>
    </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_MAIL_FROM,
      to: user.email,
      subject: "Booking Confirmed",
      html,
      attachments: [
        {
          filename: "qr.png",
          content: qrBuffer,
          cid: "qrCodeImage",
        },
      ],
    });

  } catch (error) {
    console.error(error);
  }
};