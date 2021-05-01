import React from 'react'
import {NavLink} from 'react-router-dom'

function Banner(props) {
    return (
        <div className="banner-section container-fluid d-flex justify-conent-center align-items-center">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row d-flex justify-conent-center align-items-center">
                        <div className="col-md-6 my-5 my-md-0 order-2 order-md-1">
                            <div className="left-content pe-5">
                                <h2> {props.title} </h2>
                                <p className="py-2"> {props.desc}</p>
                                <NavLink className="btn btn-outline-primary" to={props.link} exact> {props.linkName} </NavLink>
                            </div>
                        </div>

                        <div className="col-md-6 my-3 my-md-0 order-1 order-md-2">
                            <div className="right-content">
                                <img src={props.imgsrc} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
