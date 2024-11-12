import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css'

export const NavBar = () => {

    const[activeLink, setActiveLink] = useState('home')
    const[scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY>50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
        
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home"><h1 style={{color:'white'}}>PORTFOLIO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
            
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            
            <Nav.Link href="https://drive.google.com/file/d/19QcAqBD8Tl8O4XxVSC2KYX0VIWC26u_t/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}><button className='vvd'><span>View Resume</span></button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
