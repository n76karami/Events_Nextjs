import Event_card from '@/src/components/events/Event_card';
import React from 'react'

const eventPage = ({ data }) => {
  
  console.log(data)

  return (
    <Event_card data={data} />
  )
}

export default eventPage;

export const getStaticPaths = async() => {
  
  const { allEvents } = await import('/data/data.json');
  const allPaths = allEvents.map(ev => {
    return {
      params: {
        cat: ev.city,
        id: ev.id
      }
    }
  })

  console.log(allPaths)

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  console.log(context)
  const id = context.params.id;
  const { allEvents } = await import('/data/data.json');
  const eventData = allEvents.find(ev => ev.id == id)

  console.log(eventData)

  return {
    props: {
      data: eventData,
    }
  }
}