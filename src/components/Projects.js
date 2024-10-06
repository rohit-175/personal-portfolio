import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from '../assets/img/code_signs2.png'
import '../Styles/Projects.css'

export const Projects = () => {

    const projects = [
        {
            imgUrl: projImg1,
            title: 'File Transfer Application',
            description: '',
        },
        {
            imgUrl: projImg1,
            title: 'File Transfer Application',
            description: '',
        },
        {
            imgUrl: projImg1,
            title: 'File Transfer Application',
            description: '',
        },
    ]

    return(
        <section className="projects" id='projects'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index) => {
                                    return(
                                        <ProjectCard 
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane>

                    </Tab.Pane>
                  </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}