import React from 'react';
import Link from 'next/link';

const Cat_event = ({data , pageName}) => {
  return (
    <div className='cat_events'>
      <h1>Events in {pageName}</h1>
      <div className='content'>
        {data.map(ev => (
          <div className='card'>
            <Link key={ev.id}  href={`/events/${ev.city}/${ev.id}`} passHref>
              <img width="100%" height={300} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cat_event;