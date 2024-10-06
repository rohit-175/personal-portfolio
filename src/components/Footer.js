import CopyrightIcon from '@mui/icons-material/Copyright';
import { Row, Col, Container } from 'react-bootstrap';
import '../Styles/Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
          <Container>
            <Row>
              <Col>
                <p>Created by Rohit Saseendran | <CopyrightIcon/>2024 | All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
      )
}