import React from 'react'
import Card from './Card'
import CardData from './CardData'

function Service() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="page-heading my-5 text-center">
                        <h2> Our Services</h2>
                    </div>

                    <div className="row gy-3">

                        {CardData.map((val, ind) => {
                            return (
                                <Card imgsrc={val.imgsrc} title={val.title} key={ind} />
                            )
                        })}
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
