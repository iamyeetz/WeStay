
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../App.css';
const NavBar = () => {

    const scrollToBooking = () =>
    {
        document.querySelector("#Booking").scrollIntoView({behavior:'smooth'});
    }

    return (
    <Container className='NavTop'>
    <Row>
        <Col md={2} sm={3} xs={12}>
        <h2 className='logo'>we<span>Stay</span></h2>
        </Col>
        <Col>
        <Nav className="NavTop-NavItems" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li" >
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link onClick={scrollToBooking}>Book a Room</Nav.Link>
        </Nav.Item>
            </Nav>
        </Col>
    </Row>
        

    </Container>
    )
}

export default NavBar
