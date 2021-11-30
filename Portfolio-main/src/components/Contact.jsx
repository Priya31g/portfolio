import { useState, React } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import contactLight from '../media/contact-light.svg';
import contactDark from '../media/contact-dark.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contact = ({darkMode}) => {
    (function() {
        emailjs.init("user_70UnA06dWlDnkdsE7JDdh");
        })()
    const [templateParams, setTemplateParams] = useState({
		from_name: '',
        message: ''
	});

    const onInputChange = e => {
		setTemplateParams({...templateParams,[e.target.name]: e.target.value})
	}


    const onSubmit = async (e) => {
		e.preventDefault();
            emailjs.send('service_owvaq38','template_jzeroc2', templateParams, 'user_70UnA06dWlDnkdsE7JDdh')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
                swal({
                    title: "Sent Successfully!",
                    text: "Glad to hear from you! I will get back to you as soon possible",
                    icon: "success",
                  });
                setTemplateParams({
                    from_name: '',
                    message: ''
                })
    }

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Container>
            <Row>
                <Col lg={4}>
                <br></br>
                <h2 className="lead">Contact me!</h2>
                <p className="contact-text">Drop a suggestion, feedback, opportunities or we can colaborate on a project. Please mention your contact details if you are expecting a reply.</p>
                <br></br>
                <img src={darkMode? contactDark : contactLight} alt="contact" className="contact-img img-fluid"/>
                </Col>
                <Col lg={8}>
                <br></br>
                {/* <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group>
                        <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control  onChange={e => onInputChange(e)} value={templateParams.message} name="message"  as="textarea" rows={8} className="ph msg" placeholder="Enter your message" />
                    </Form.Group>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} type="submit">
                        Submit
                    </Button>
                </Form> */}
                <a href="https://github.com/Priya31g">
                <Button variant={darkMode ? "outline-light" : "outline-dark"} target="_blank" rel="noreferrer noopener" style={{margin:"1% 3%"}} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faGithub}/>
                    </Button>
                    </a>
                
                    <a href="https://www.linkedin.com/in/priya-kumari-gupta/">
                <Button variant={darkMode ? "outline-light" : "outline-dark"} target="_blank" rel="noreferrer noopener" style={{margin:"1% 3%"}} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x'  icon={faLinkedin}/>
                    </Button>
                    </a>

                    <a href="https://twitter.com/Priya31g">
                <Button variant={darkMode ? "outline-light" : "outline-dark"} target="_blank" rel="noreferrer noopener" style={{margin:"1% 3%"}} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faTwitter}/>
                    </Button>
                    </a>

                    
                </Col>
            </Row>
            </Container>
            <br></br>
        </div>
    )
}

export default Contact
