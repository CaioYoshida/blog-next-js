import { useState, useEffect } from 'react'
import Input from '../components/input'
import Button from '../components/button'
import axios from 'axios'

export default function Header({ actionPoint = 1000 }) {
  const [showNewsletter, setShowNewsletter] = useState(true)
  const [emailAddress, setEmailAddress] = useState('')

  const handleSubscribeButton = async () => {
    console.log(emailAddress)
    await axios.post('api/subscribe', {
      emailAddress
    })
      .then(() => alert('Email successfully registered!'))
      .catch((error) => alert(`Email register failed: ${error}`))
  }

  const handleScroll = () => {
    if(window.scrollY >= actionPoint) {
      setShowNewsletter(false)
    } else {
      setShowNewsletter(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className={`transition duration-500 ease-in-out fixed bottom-0 w-full z-30 ${showNewsletter ? 'transform translate-y-20' : 'transform -translate-y-0'} font-lobster`}>
      <nav className={`transition duration-500 ease-in-out flex items-center justify-center bg-gray-300 shadow px-4 py-4`}>
        <div className="grid grid-flow-col gap-4">
          <span className="self-center font-bold text-red-600" >Stay Up To Date</span>
          <Input 
            marginTop={0} 
            placeholder="Enter with your e-mail" type="email"
            type="text"
            value={emailAddress}
            setValue={event => setEmailAddress(event.target.value)}
          />
          <Button 
            backgroundColor="bg-red-600"
            onClick={handleSubscribeButton}
          >
            Subscribe
          </Button>
        </div>
      </nav>
    </div>
  )
}
