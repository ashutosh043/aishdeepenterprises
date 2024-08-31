const http = require('http')
const nodemailer = require("nodemailer")

const server =  http.createServer((req, res) => {
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
     user: 'ashush95@gmail.com',
        pass: 'tehd cmpp arkx ehmu'
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Ashutosh Kumar 👻" <ashusah95@gmail.com>', // sender address
    to: "ashusah95@gmail.com", // list of receiver
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  resizeBy.json(info)
}

main().catch(console.error);

});
server.listen(3000)