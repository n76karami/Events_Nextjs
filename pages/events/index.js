import Events_page from '@/src/components/events/events_page';
import React from 'react'

const events = ({data}) => {
  
  return (
    <Events_page data={data} />
  )
}

export default events;


export const getStaticProps = async () => {
  
  const {events_categories} = await import('/data/data.json');
  console.log(events_categories); // khoroji dar cmd

  return {
    props: {
      data: events_categories,
    }
  }

}
