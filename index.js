function goForm() {
  let email = document.getElementById("email").value;

  const nodeMailer = require("nodemailer");

  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'evaldtygor@gmail.com',
      pass: 'bqvzbmudlbudyhht'
    }
  });

  let mailOptions = {
    from: 'evaldtygor@gmail.com',
    to: 'evaldtygor@rede.ulbra.br',
    subject: email,
    text: 'Essa foi fácil'
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
    } else {
      console.log(`Email enviado: ${info.response}`);
    }
  });
}