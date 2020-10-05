import axios from 'axios'

const { MAILCHIMP_SECRET: secret } = process.env

export default async (req, res) => {
  const email = req.body.emailAddress
	try {
    const response = await axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': secret,
      },
      url: 'https://us2.api.mailchimp.com/3.0/lists/446bf459df',
      data: { 
        members: [{
          email_address: email,
          status: 'unsubscribed'
        }],
        update_existing: true,
      },
    })
    
    if (response.status === 200) {
      res.status(200).send('Success')
    } else {
      res.status(400).send('Fail')
    }
  } catch {
    res.status(400).send('Fail')
   }
}