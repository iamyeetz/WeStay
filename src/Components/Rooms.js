import Room from './Room'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
const Rooms = ({rooms,addBooking}) => {
    return (
        <Container>
            <Row>
            {rooms.map((room) => (<Col key={room.id} md={4}><Room  room={room} roomPhotos={room.photos} addBooking={addBooking} /></Col>))}
            </Row>
        
        </Container>
    )
}

export default Rooms
