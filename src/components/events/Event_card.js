import React from 'react'

const Event_card = ({data}) => {
  return (
    <div className='event_card'>
      <img src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* <input type="email"/>
      <button>Submit</button> */}
    </div>
  )
}

export default Event_card;