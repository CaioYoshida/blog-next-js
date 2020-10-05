import axios from 'axios'

const { MAILCHIMP_SECRET: secret } = process.env

module.exports = async (req, res) => {
  const email = req.body.emailAddress

	try {
    console.log('entrou subscribe')
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
          status: 'subscribed'
        }],
        update_existing: true,
      },
    })
    
    if (response.status === 200) {
      res.statusCode = 200
      res.end()
    } else {
      res.statusCode = 400
      res.end()
    }
  } catch(error) {
    res.send(`error: entrou try catch`)
  }
}