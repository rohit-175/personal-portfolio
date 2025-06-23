import { Container, Row, Col, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from '../assets/img/code_signs2.png'
import '../Styles/Projects.css'

export const Projects = () => {

    const projects = [
        {
            imgUrl: projImg1,
            title: 'File Sharing Application',
            description: 'Effortlessly upload files and generate secure, shareable links for easy downloads.',
            sourceLink: 'https://github.com/rohit-175/file-sharing-app',
        },
        {
            imgUrl: projImg1,
            title: 'Autogen Multi-Agent Chat',
            description: 'AI chat system using AutoGen with multiple agents collaborating to answer user queries.',
            sourceLink: 'https://github.com/rohit-175/autogen-multiagent-chat',
        },
        {
            imgUrl: projImg1,
            title: 'Anime Website',
            description: 'Searches for anime titles and displays detailed information using an integrated API.',
            sourceLink: 'https://anime-website-green-psi.vercel.app/',
        },
    ]

    return(
        <section className="projects" id='projects'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                  </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}