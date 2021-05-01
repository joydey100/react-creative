import React from 'react'
import Banner from './Banner'
import Image from '../images/home.svg'

function Home() {
    return (
        <Banner 
        title="Grow your Busines with Creative"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquam corporis vel eaque tempore! Dolorum, sint."
        link="/react-creative/about"
        linkName= "About Us"
        imgsrc={Image}/>
    )
}

export default Home
