import CopyrightIcon from '@mui/icons-material/Copyright';
import { Row, Col, Container } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import '../Styles/Footer.css'

export const Footer = () => {
    return (
        <footer className="footer" id='footer'>
          <Container>
            <Row>
              <Col>
              <p id="outro">Feel free to reach out for any collaboration opportunities or inquiries you may have.<br/>
              I'm always open to discussing ideas and exploring how we can work together!<br/>
              </p>
              <p id='mail'>
              Email: &nbsp; <span>saseendranrohit@gmail.com</span>
              </p>
              <div className='social-icon'>
                <a href='https://www.linkedin.com/in/rohit-saseendran-49a223215/' target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt='Linkedin'/></a>
                <a href='https://github.com/rohit-175' target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt='Github'/></a>
                <a href='https://www.instagram.com/_rohit175/' target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt='Instagram'/></a>
            </div>
                <p>
                  <CopyrightIcon/>&nbsp;2024&nbsp;|&nbsp;Created by Rohit Saseendran
                  {/* &nbsp;All Rights Reserved */}
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      )
}