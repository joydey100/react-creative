import React from 'react'
import Banner from './Banner'
import Image from '../images/about.svg'

function About() {
    return (
        <div>
            <Banner 
            title="See Our Mission and Vision"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquam corporis vel eaque tempore! Dolorum, sint."
            link="/react-creative/service"
            linkName= "Our Services"
            imgsrc={Image}/>
        </div>
    )
}

export default About
