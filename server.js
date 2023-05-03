// create the folder name server.js
// import { HttpClient } from '@angular/common/http';
/* this.http.post(' http://localhost:3000/sendmail', { ...this.SignUpForm.value }).subscribe(data => {
    console.log(data);
});*/
// HttpClientModule,
//import { HttpClientModule } from "@angular/common/http"


// npm install express body-parser cors nodemailer 
// node server.js
// curl -X POST http://localhost:3000/sendmail run in cmd 





//import modules installed at the previous step. We need them to run Node.js server and send emails


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// create a new Express application instance
const app = express();
//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());
//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});
// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "janubhav3605@gmail.com",
            pass: "fxbbauhylawgqqht",
        }
      });
      // verify connection configuration
    transporter.verify(function(error, info) {
        if (error) console.log(error);
        else {
            console.log("Server is ready to take our messages");
            const mailOptions = {
                from: `"janubhav3605@gmail.com"`,
                to: `anubhav.jain_cs19@gla.ac.in`,
                subject: "Greetings.",
                text:  `firstname: ${req.body.FirstName} 
                lastname: ${req.body.LastName}
                email: ${req.body.Email}
                DOB:${req.body.DateOfBirth}
                Gender: ${req.body.Gender}
                Mob.no: ${req.body.MobileNo}
                country: ${req.body.Country}`,
                        
                
            };
            transporter.sendMail(mailOptions);
        }
    });
});