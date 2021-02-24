import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import {useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import Image from 'react-bootstrap/Image'
import { FaParking,FaWifi,FaTv,FaTemperatureHigh,FaLaptop,FaBed} from 'react-icons/fa'

const Room = ({room,roomPhotos,addBooking}) => {
    const [roomBookingDates,setRoomBookingDate] = useState([]);
    const [email,setEmail] = useState('');
    const [bookDate,setBookDate] = useState('');
    const [guest,setGuest] = useState(0);
    const [show, setShow] = useState(false);
    const [showCal,setShowCal] = useState(false);
    const handleClose = () => setShow(false);



const handleShowCal = (e) => {
    
   const showCalendarButton = document.querySelector("#showCalendar");
   console.log(e);
   if(showCal)
   {
       showCalendarButton.innerHTML = "Show Calendar"
   }
   else
   {
    showCalendarButton.innerHTML = "Close Calendar";
   }
   setShowCal(!showCal)
    
};


const handleDateClick = (e) => {
   setBookDate(e.dateStr);
}


const handleShow = () => {
    refreshBookingDate();
    setShow(true)
}


const handlesOnSubmit = (e) =>
{
    e.preventDefault()
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email || !bookDate || !guest){
        alert('Please fill out all the necessary information needed to proceed with your booking.')
        return;
    }
    if(!email.match(mailformat))
    {
        alert("You have entered an invalid email address!");
        return;
    }
    if(guest > room.roomCapacity)
    {
        alert('Guest should not more that the capacity of the room.')
        return;
    }
    if(guest < 0)
    {
        alert('Guest should not a negative number.')
        return;
    }
    const isDateAvailable = roomBookingDates.filter((x) => {

      var date = new Date(x.date)
      var chosenDate = new Date(bookDate)
      var a = `${date.getFullYear()}-${date.getDate()}-${date.getUTCMonth()}`
      var b = `${chosenDate.getFullYear()}-${chosenDate.getDate()}-${chosenDate.getUTCMonth()}`
      return a == b;

    });
    if(isDateAvailable.length > 0)
    {
        alert('Chosen date is already not available.')
        return;
    }

    if(new Date(bookDate) < new Date())
    {
        alert('Chosen date is should not be in the past.')
        return;
    }
    
    addBooking({email,bookDate,guest,room})
    setEmail('')
    setBookDate('')
    setGuest('')
    setShow(false);
}

const refreshBookingDate = () =>
 {
    var dates = room.roomBookDates.map((n) => {
        
        const formattedDate = new Date(n.dateFrom);
        const formattedDateToShow = `${formattedDate.getFullYear()}-${formatDate(formattedDate.getMonth()+1)}-${formatDate(formattedDate.getDate())}`;
        console.log(formattedDateToShow);
        return { title:'Reserved','date': formattedDateToShow}
     });
    console.log(dates);
  
   setRoomBookingDate(dates);
}

const formatDate = (a) =>
{
  if(a < 10)
  {
      return '0'+a;
  }
  else
  {
      return a;
  }
}

useEffect(() => {

    refreshBookingDate();

},[]);

    return (
        <div  className='d-flex justify-content-around'>
        <Row>
            <Col md={4}> 
                <Card style={{ width: '18rem', height:'32em' }}>
                  <Card.Img variant="top" height='300px' src={room.photos[0].fileName} />
                    <Card.Body>
                        <Card.Title>{room.title}</Card.Title>
                            <Card.Text >
                            {room.description}
                            </Card.Text>
                        <Button variant="primary" onClick={handleShow}>Book Now</Button>                   
                    </Card.Body>
                </Card>
            </Col>        
        </Row>
        <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{room.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>

                        </div>
                        <div>
                            <form onSubmit={handlesOnSubmit}>
                                <div className='form-group'>
                                        <Row>                  
                                            {roomPhotos.map((picture) => ( <Col key={picture.id} md={3}><Image  width='100%' height='70%'src={picture.fileName} rounded /> </Col>))}                            
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                        <div>
                                            <p>Room Capacity (person): {room.roomCapacity}</p>
                                            <p>Rate per night : {room.price}</p>
                                            <p>Address : {room.address}</p>
                                            <iframe title='Map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.767915271296!2d120.99335465096203!3d14.612292680656143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b60396426393%3A0x3725ac9885620008!2sCristobal%20St%2C%20Sampaloc%2C%20Manila%2C%201008%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1614135366908!5m2!1sen!2sph' width='100%' height='200' style={{border:0}} allowfullscreen='' loading='lazy'></iframe>
                                        </div>
                                            </Col>
                                            <Col md={6}>
                                            <h4>Amenities</h4>
                                            <p><FaParking size='30px'></FaParking><span className='amenities-desc'>free parking</span></p>
                                            <p><FaTv size='30px'></FaTv><span className='amenities-desc'>75 inches android TV</span></p>
                                            <p><FaWifi size='30px'></FaWifi><span className='amenities-desc'>Unlimited use of WIFI</span></p>
                                            <p><FaLaptop size='30px'></FaLaptop><span className='amenities-desc'>Dedicated Workspace</span></p>
                                            <p><FaTemperatureHigh size='30px'></FaTemperatureHigh><span className='amenities-desc'>Centralized Aircon</span></p>
                                            <p><FaBed size='30px'></FaBed><span className='amenities-desc'>3 bedrooms </span></p>
                                            </Col>
                                        </Row>
                                  </div>
                                <div className='form-group'>
                                    <label className='form-label'>Email Address</label>
                                    <input type='text' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>No. Of Guest</label>
                                    <input type='number' className='form-control' value={guest} onChange={(e) => setGuest(e.target.value)}></input>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Date Of Stay</label>
                                    <input type='date' className='form-control' value={bookDate} onChange={(e) => setBookDate(e.target.value)}></input>
                                </div>
                                <div className='form-group'>
                                <a className='btn btn-info' id='showCalendar' onClick={handleShowCal}>Show Calendar</a>
                                    {
                                        showCal && <FullCalendar contentHeight="300px"
                                        plugins={[ dayGridPlugin,interactionPlugin ]}
                                        initialView="dayGridMonth"
                                        events={roomBookingDates}
                                        eventColor='red'
                                        eventBackgroundColor='red'
                                        dateClick={handleDateClick}
                                        
                                            />
                                    }
                                </div>
                            <input type='submit' className='btn btn-block btn-success' value='Process Booking'></input>
                            </form>
                        </div>
           
               
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default Room
