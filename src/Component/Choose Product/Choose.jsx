import React from 'react'

export const Choose = (props) => {
    console
    return (
        <div>
            <div className="choose flex justify-center items-center ">
                <div className="card flex justify-center items-center">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{props.text }</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
