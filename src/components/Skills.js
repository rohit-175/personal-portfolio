import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html_logo from '../assets/img/html_logo.png'
import cpp_logo from '../assets/img/cpp_logo.png'
import css2_logo from '../assets/img/css2_logo.png'
import javascript_logo from '../assets/img/javascript_logo.png'
import react_logo from '../assets/img/react_logo.png'
import python_logo from '../assets/img/python.png'
import mysql_logo from '../assets/img/pngwing.com.png'
import node_logo from '../assets/img/nodejs.png'
import '../Styles/Skills.css'

export const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={html_logo} alt="Img"></img>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css2_logo} alt="Img"></img>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript_logo} alt="Img"></img>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={react_logo} alt="Img"></img>
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={node_logo} alt="Img"></img>
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={cpp_logo} alt="Img"></img>
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={python_logo} alt="Img"></img>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql_logo} alt="Img"></img>
                                    <h5>MySQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}