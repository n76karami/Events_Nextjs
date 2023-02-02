import Cat_event from '@/src/components/events/Cat_event';

import React from 'react'

const eventsCatPage = ({data , pageName}) => {
  return (
    <Cat_event data={data} pageName={pageName} />
  )
}

export default eventsCatPage;

export const getStaticPaths = async () => {
  
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map(ev => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  console.log(allPaths)

  return {  
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async(context) => {
  
  console.log(context);
  const id = context.params.cat;
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.filter(ev => ev.city == id)
  console.log(data)

  return {
    props: {
      data: data,
      pageName : id
    }
  }
}