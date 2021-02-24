import EfCore from '../Images/efcore.png'
import React from '../Images/reactjs.png'
import NetCore from '../Images/netcore.png'
import Sql from '../Images/sqlserver.jpg'
const Contact = () => {
    return (
        <div>
            <image src=''></image>
            <blockquote className='blockquote text-center'>
            <p className='mb-0'>Sometimes, you just need a break, to a place you love, to get away from everything</p>
            <footer className='blockquote-footer'>Thankyou for the qoute, My bestfriend <cite title="Source Title">Google</cite></footer>
            </blockquote>
 <img className='footerIcons' src={EfCore} alt='Entity Framework Core'></img><img className='footerIcons' src={React} atlt='React Js'></img><img className='footerIcons'src={NetCore} alt='.Net Core'></img><img className='footerIcons' src={Sql} alt='Sql Server'></img>
                  <p>powered by</p>
       </div>
    )
}

export default Contact
