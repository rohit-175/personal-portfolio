import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/headerImg.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import '../Styles/HeroBanner.css'

export const HeroBanner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [ "Web Developer", "ML Enthusiast", "Problem Solver" ]
    const [delta, setDelta] = useState(200);
    const [index, setIndex] = useState(1);
    const [text, setText] = useState('')
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(50);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(200);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }


    return (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                    <h1>{`Hi! I'm Rohit and I'm a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "ML Enthusiast", "Problem Solver" ]'><span className="wrap">{text}</span></span></h1>
                    <span className="tagline">Welcome to my Portfolio</span>
                      <p>Your friendly neighborhood web developer here. I craft websites that work harder than I do and explore tech like it’s a buffet—sampling everything from front-end delicacies to backend surprises. Join me as I turn coffee into code and ideas into pixels!</p>
                      <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                
              </Col>
              {/* <Col>
              <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
              </Col> */}
            </Row>
          </Container>
        </section>
      )
}