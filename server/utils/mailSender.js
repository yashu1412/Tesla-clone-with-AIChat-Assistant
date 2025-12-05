const nodemailer = require("nodemailer")

const createGmailTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use STARTTLS
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    // Allow self-signed/Intercepting certificates (fixes ESOCKET self-signed error in dev/proxy)
    tls: {
      rejectUnauthorized: false,
    },
  })

const mailSender = async (email, title, body, options = {}) => {
  try {
    console.log("Starting mailSender with:", { email, title })
    console.log("Environment variables:", {
      host: process.env.MAIL_HOST,
      user: process.env.MAIL_USER,
      hasPass: !!process.env.MAIL_PASS
    })

    const transporter = options.transporter || createGmailTransporter()

    // Wrap the provided body in a Tesla Clone themed template
    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#0b0c10; padding:24px; color:#e5e7eb;">
        <div style="max-width:520px; margin:0 auto; background:#111827; border-radius:12px; overflow:hidden; border:1px solid #1f2937;">
          <div style="padding:20px 24px; border-bottom:1px solid #1f2937; display:flex; align-items:center; gap:12px;">

            <div>
              <div style="font-weight:600; font-size:14px; color:#f9fafb;">Tesla Clone</div>
              <div style="font-size:12px; color:#9ca3af;">AI-Powered Tesla Experience</div>
            </div>
          </div>

          <div style="padding:24px 24px 20px 24px;">
            ${body}
          </div>

          <div style="padding:16px 24px 20px 24px; border-top:1px solid #1f2937; font-size:11px; color:#6b7280;">
            You are receiving this email because you interacted with the Tesla Clone web app.
            If you did not initiate this request, you can safely ignore this message.
            <br/><br/>
            &copy; ${new Date().getFullYear()} Tesla Clone with AI Chat Assistant
          </div>
        </div>
      </div>
    `

    console.log("Transporter created successfully")

    let info = await transporter.sendMail({
      from: `"Tesla Clone | SignUp verification" <${process.env.MAIL_USER}>`,
      to: `${email}`,
      subject: `${title}`,
      html: htmlBody,
    })
    
    console.log("Email sent successfully. Response:", info.response)
    console.log("Full info object:", info)
    return info
  } catch (error) {
    console.error("Error in mailSender:", {
      message: error.message,
      stack: error.stack,
      code: error.code
    })
    return error.message
  }
}

module.exports = mailSender
module.exports.createGmailTransporter = createGmailTransporter
