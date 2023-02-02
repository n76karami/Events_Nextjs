import React from 'react'
import Link from 'next/link';

const Events_page = ({ data }) => {
  return (
    <div className='events_page'> 
        {data.map(ev => (
          <Link className='card' key={ev.id} href={`/events/${ev.id}`} passHref>        
            <div>
              <img width={300} height={300} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Events_page;