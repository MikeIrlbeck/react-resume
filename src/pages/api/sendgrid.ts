import sendgrid from '@sendgrid/mail';
import {NextApiResponse} from 'next';
import type {FormData} from '../../components/Sections/Contact/ContactForm';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

type RequestData = {
  body: FormData;
};

async function sendEmail(req: RequestData, res: NextApiResponse) {
  try {
    console.log('sending...', req);
    await sendgrid.send({
      to: 'software.mikeirlbeck@gmail.com', // Your email where you'll receive emails
      from: 'software.mikeirlbeck@gmail.com', // your website email address here
      // from: req.body.email, // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      text: `My text`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
      </body>
      </html>`,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    if (error.response) {
      console.log(error.response.body);
    }
    return res.status(error.statusCode || 500).json({error: error.message});
  }

  return res.status(200).json({error: ''});
}

export default sendEmail;
