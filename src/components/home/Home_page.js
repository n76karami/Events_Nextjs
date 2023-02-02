import Link from 'next/link';
import React from 'react';
// import styles from '@/styles/Home.module.css';


const Home_page = ({data}) => {
  return (
    <div className='home_body'>
      {data.map((ev) => (
        <Link
          key={ev.id}
          href={`/events/${ev.id}`}
          // style={{ display: "inline-block", width: "100%" }}
          passHref
        >
          <div className='card'>
            <img width={300} height={300} alt={ev.title} src={ev.image} />
            <div className='content'>
              <h1>{ev.title}</h1>
              <p>{ev.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home_page;