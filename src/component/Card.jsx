import React from 'react'
import {NavLink} from 'react-router-dom'

function Card(props) {
    return (
        <div className="col-md-4 my-4">
                        <div class="card">
                            <img src={props.imgsrc} class="card-img-top" alt="service-image"/>
                            <div class="card-body">
                                <h5 class="card-title">{props.title}</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laborum.</p>
                                <NavLink to="/react-creative/contact" className="btn btn-primary"> Contact Us </NavLink>
                            </div>
                            </div>
                        </div>
    )
}

export default Card
