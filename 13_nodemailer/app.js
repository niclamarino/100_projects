const fs = require('fs'),
	  path = require('path'),
	  nodemailer = require('nodemailer'),
	  hbs = require('hbs'),
	  bodyParser = require('body-parser'),
	  xoauth2 = require('xoauth2'),
	  express = require('express');

	  express().set('view engine', 'hbs');
	  hbs.registerPartials(__dirname + '/views/partials');

	  let app = express();

	  app.use(express.static(__dirname + '/public'));

	  app.use(bodyParser.urlencoded({extended: true}));
	  app.use(bodyParser.json());

	  app.get('/', (req, res) => {
	  	res.render('form.hbs', {
	  		variabile: 'Valore Variabile',
	  	});
	  });

// Nodemail

app.post('/send-email', function (req, res) {
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		service: 'gmail',
		secure: false,
		auth: {
			user: 'niclamarino@gmail.com',
			pass: 'PASSWORD',
			xoauth2: xoauth2.createXOAuth2Generator({
				user: 'niclamarino@gmail.com',
				clientId: '0000',
				clientSecret: '0000',
				refreshToken: '0000'
			})
		}
	})
	let mailOptions = {
          from: '"Nicla Marino" <niclamarino@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          html: req.body.body // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
      	if (error) {
      		return console.log(error);
      	}
      	console.log('Message %s sent: %s', info.messageId, info.response);
      	res.render('index');
      });
  });


app.listen(3000, () => console.log('Server is running.'));