function goform(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let email = document.getElementById("email").value;

  const nodeMailer = require("nodemailer");

  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'evaldtygor@gmail.com',
      pass: ''
    }
  });

  let mailOptions = {
    from: 'evaldtygor@gmail.com',
    to: 'evaldtygor@rede.ulbra.br',
    subject: email,
    html: `<h1>Novo contato via portfólio online</h1><p><strong>Nome: </strong>${nome}</p><br><p><strong>Telefone: </strong>${telefone}</p><br><p><strong>Email: </strong>${email}</p><br>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
    } else {
      console.log(`Email enviado: ${info.response}`);
    }
  });
}