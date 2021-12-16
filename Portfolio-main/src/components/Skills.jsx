import React,{useState} from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/skills-light.svg';
import skillsDark from '../media/skills-dark.svg';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt,  faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';


const Skills = ({darkMode}) => {
    const [hover, setHover] = useState();

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
            <Container>
                <Row>
                <Col lg={4} xs={8}>
                    <h1 className="display-3 skill-h">I can work <p className="with">with</p> </h1>
                    <img src={darkMode? skillsDark : skillsLight} alt="skills" className="skills-img img-fluid animated"/>
                </Col>
                <Col lg={2} xs={4}>
                    <br></br>
                    <Card className="nbcard">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faHtml5}/>
                    {hover ? <p style={{fontSize:"10px"}}>HTML5</p> : ""}
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"}  onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faCss3Alt}/>
                    {hover ? <p style={{fontSize:"10px"}}>CSS</p> : ""}
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"}  onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faJs}/>
                    {hover ? <p style={{fontSize:"10px"}}>JS</p> : ""}
                    </Button>
                    <Button  onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faReact}/>
                    {hover ? <p style={{fontSize:"10px"}}>React</p> : ""}
                    </Button>
                   
                   
                    <Button  onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <p align="center"style={{fontSize:"23px",marginBottom:"0%"}} className="skill-txt">Ex</p>
                    {hover ? <p style={{fontSize:"9px",marginTop:"0%"}}>Express Js</p> : ""}
                    </Button>
                   
                    </Card>
                </Col>
                <Col lg={6} xs={12}>
                    <br></br>
                    <Card className="skill-nbcard">
                        <Card.Body>
                            <Card.Title>Programming Languages</Card.Title>
                            <Card.Text>C Programming, C++,  JavaScript</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Technologies</Card.Title>
                            <Card.Text>HTML, CSS, Bootstrap,  ReactJs, Redux, ExpressJS,Express </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Others</Card.Title>
                            <Card.Text>Mongoose, MongoDB </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <br></br>
                <hr></hr>
            </Container>
            </Slide>
        </div>
    )
}

export default Skills
