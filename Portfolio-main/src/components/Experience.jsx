import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import dsc from '../media/DSC.png'
import scr from '../media/SCR.png'
import gotg from '../media/GOTG.png'
import starwars from "../media/starwars.png"
import rfp from '../media/RFP.png'
import ca from '../media/CA.png'
import tcd from '../media/Zoomcar.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import Modal from 'react-bootstrap/Modal'
import abhi from "../media/abhi.jpg" 

const Experience = ({darkMode}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
            <Container>
                <br></br>
                <h2 className="lead" align="center"><b>- Projects -</b></h2>
                <br></br>
                <Zoom>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={tcd}/>
                                        <Card.Body>
                                            <Card.Title align="center">Zoomcar clone</Card.Title>
                                            <Card.Text>
                                                <p align="center"> A web application to rent cars on daily and monthly basis in selected cities.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Implemented ExpressJS for rendering Views.Used MongoDB for Backend Storage. Built the entire application using NodeJS,HTML , CSS.
                                        <br/>
                                        A Collaborative Project built by a team of four members.
                                        </p>
                                        <br/>
                                        <h4>Tech Stack</h4>
                                        <p> Node js | Express | Express JS | HTML | MongoDB | Mongoose |CSS | JavaScript</p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://zoomcarcom.herokuapp.com/home" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/patelrohan224/Zoomcar_backend" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={starwars}/>
                                        <Card.Body>
                                            <Card.Title align="center">Star Wars Character Details</Card.Title>
                                            <Card.Text>
                                                <p align="center">While learning fetch api , I am building a web app to get personal details of all actors who played the characters.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Planned the UI for website and designed frontend using only HTML ans CSS.
                                        <br></br>
                                        <br></br>
                                        Built the web page in just 2 days.
                                        <br/>
                                        <h4>Tech Stack</h4>
                                        <p> Node js | HTML | CSS | JavaScript</p>
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div> 
                        <a href="https://star-wars-character-details-clone.vercel.app/Index.html" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>  
                        <a href="https://github.com/Priya31g/Star-Wars" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                           
                           
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={abhi}/>
                                        <Card.Body>
                                            <Card.Title align="center">Abhius clone</Card.Title>
                                            <Card.Text>
                                                <p align="center">A web Application where you can book Train tickets, Bus tickets, and Hotels.</p>
                                               
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>A web Application where you can book Train tickets, Bus tickets, and Hotels
                                        <br></br>It has all the basic sorting, filtering function.
                                        <br/>
                                        A Collaborative Project built by a team of four members.
                                        </p>
                                         <br/>
                                                <h4>Tech Stack</h4>
                                        <p> ReactJS | Express |  HTML | MongoDB | Mongoose |CSS | JavaScript</p>
                                       
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://abhi-bus-clone.vercel.app/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/Priya31g/abhibus-clone" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                </Row>
                </Zoom>
                
            </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Experience
