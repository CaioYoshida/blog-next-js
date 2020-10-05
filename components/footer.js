import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Input from '../components/input'
import Button from '../components/button'
import Container from '../components/container'
import UseVisibility from '../components/useVisibility'

import github from '../public/assets/svg/github.svg'
import instagram from '../public/assets/svg/instagram.svg'
import linkedin from '../public/assets/svg/linkedin.svg'
import htmlCoding from '../public/assets/svg/html-coding.svg'

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  async function handleSendEmail(event) {
    event.preventDefault()

    const emailSetting = { name, email, subject, message }

    await axios.post('api/sendEmail', emailSetting)
      .then(() => {
        setEmail('')
        setName('')
        setMessage('')
        setSubject('')
      })
      .catch((error) => alert(`Falha: ${error}`))
  }

  return (
    <footer id="contact" className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="block md:flex md:justify-center">
          <form className="md:w-2/3 rounded bg-transparent px-4 mb-6 xl:mx-12 flex flex-col" action="submit">
            <div className="block sm:grid sm:grid-flow-col sm:grid-cols-2 sm:gap-8">
                <div className="sm:mb-0 mb-2">
                  <Input 
                    label="Name *"
                    type="text"
                    value={name}
                    setValue={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <Input 
                    label="E-mail *"
                    type="e-mail"
                    value={email}
                    setValue={e => setEmail(e.target.value)}
                  />
                </div>
            </div>
            <div className="mt-4">
              <Input 
                label="Subject *"
                type="text"
                value={subject}
                setValue={e => setSubject(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="font-semibold" for="messageBox">Message *</label>
              <textarea 
                id="messageBox"
                name="Message" 
                className="text-base shadow appearance-none rounded w-full mt-2 px-4 py-2 focus:outline-none focus:shadow-outline leading-tight" 
                cols="30" 
                rows="5"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <div className="mt-4 xl:w-64 hover:opacity-50">
              <Button type="submit" onClick={handleSendEmail}>Enviar</Button>
            </div>
          </form>
          <div className="bg-transparent h-20 flex flex-row pt-6 md:flex-col md:h-auto md:w-1/3 md:pl-6">
            <UseVisibility>
              <div className="flex flex-row">
                <img src={htmlCoding} className="fill-black h-8 w-8 mr-2" />
                <Link href="/" >
                  <a className="font-semibold text-black text-xl tracking-tight">START : CODE</a>
                </Link>
              </div>
            </UseVisibility>
            <div className="flex flex-row md:mt-8">
              <UseVisibility tailwindCSS="delay-100">              
                <div className="h-8 w-8 mr-4 md:mr-0 md:h-12 md:w-12">
                  <a href="https://github.com/CaioYoshida" className="font-semibold text-black text-xl tracking-tight">
                    <img src={github} alt=""/>
                  </a>
                </div>                
              </UseVisibility>
              <UseVisibility tailwindCSS="delay-200"> 
                <Link href="/" >
                  <div className="h-8 w-8 mr-4 md:mr-0 md:h-12 md:w-12">
                    <a className="font-semibold text-black text-xl tracking-tight">
                      <img src={instagram} alt=""/>
                    </a>
                  </div>
                </Link>
              </UseVisibility>
              <UseVisibility tailwindCSS="delay-300"> 
                <div className="h-8 w-8 md:h-12 md:w-12">
                  <a href="https://www.linkedin.com/in/caio-yoshida-17b558b9/" className="font-semibold text-black text-xl tracking-tight">
                    <img src={linkedin} alt=""/>
                  </a>
                </div>  
              </UseVisibility>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
