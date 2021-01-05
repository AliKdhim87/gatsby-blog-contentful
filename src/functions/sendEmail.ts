import sgMail from "@sendgrid/mail"

const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY)
}

exports.handler = async (event, _context) => {
  const payload = JSON.parse(event.body)
  const { email, subject } = payload

  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`
    })
    .join("<br><br>")

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: email,
    subject: subject ? subject : "Contact Form Submission",
    html: body,
  }

  try {
    await sgMail.send(msg)
    return {
      statusCode: 200,
      body: "Message sent",
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    }
  }
}