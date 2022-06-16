import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>

    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>

    <h1>Home</h1>

    <Footer />
    
    </>
    
  )
}

export default Home