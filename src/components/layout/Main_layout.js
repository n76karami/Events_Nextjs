import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Main_layout = ( {children} ) => {
  return (
    <>
      <Header />
        <main>{children}</main> {/*baraye in main ro inja gozashtam ke toye hame safhe ha nazaram*/}
      <Footer />
      
    </>
  )
}

export default Main_layout;