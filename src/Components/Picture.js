import Image from 'react-bootstrap/Image'


const Picture = ({filePath}) => {
    console.log(filePath);
    return (
   
  
              <Image className='zoom' width='100%' src={filePath} rounded />
           
 
    )
}

export default Picture
