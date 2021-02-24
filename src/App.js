import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Rooms from './Components/Rooms'
import Contact from './Components/Contact'
import Button from 'react-bootstrap/Button'
import {useEffect,useState} from 'react'


function App() {

  const [rooms,setRooms] = useState([]);



useEffect(() => 
  {
    const getRooms = async () => {
    const roomFromServer = await fetchRooms();
    setRooms(roomFromServer);
    console.log(roomFromServer);
  }
    getRooms();

},[]);

const fetchRooms = async() =>
{
  const res =   await fetch('https://localhost:44323/api/Room/getAllRooms');
  const data = res.json();
  return data;
}

const addBooking = async(booking) =>
{

   console.log(booking);

   const toAdd = {

    'EmailAddress' : booking.email,
    'PeopleStaying' : parseInt(booking.guest),
    'RoomId' : booking.room.id,
    'DateFrom' : booking.bookDate

   }
 console.log(JSON.stringify(toAdd))
  const res = await fetch('https://localhost:44323/api/Booking/BookRoom',
   {
     method:'POST',
     headers : {
       'Content-type' : 'application/json'
     },
     body : JSON.stringify(toAdd)
   }, )
    const data = await res.json();
    alert(data);
    const roomsFromServer = await fetchRooms();
    setRooms(roomsFromServer);
}

  return (
    <div className='container'>
      <NavBar />
      <Hero />
      <div id='Booking' className='booking'>
      <h4 className='booking-header'>Book one of our room!</h4>
      <Rooms rooms={rooms} addBooking={addBooking} />
      </div>
      <div className='contact-me'>
      <Contact />
      </div>
    </div>
  );
}

export default App;
