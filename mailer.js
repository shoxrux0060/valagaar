const nodemailer = require('nodemailer');
const { mailer: { departure, destinations, transport } } = require('./server.config.dist');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "minimaxwoxa77@gmail.com",
    pass: "Minimaxwoxa78"
  }
});

function parseTemplateData(data) {
  return Object.entries(data);
}

function createEmailTemplate(data = []) {
  const templateData = parseTemplateData(data);

  return templateData
    .map(
      ([title, value]) => `
      <b>${title.toUpperCase()}:</b>
      <br/>
      ${value}<br/>
    `
    )
    .join('<br/>');
}

module.exports = ({ title, emailData }) => {
  const mailOptions = {
    from: 'minimaxwoxa77@gmail.com',
    to: ['minimaxwoxa77@gmail.com','Maya@valagaar.com',"Rainbowbuyers@yahoo.com"],
    subject: title,
    html: createEmailTemplate(emailData) // plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
};
