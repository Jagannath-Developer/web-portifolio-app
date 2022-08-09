import React from 'react'

export default function ServiceCard(props) {
    return (
        <div>
            <div className="card" style={{width:"16rem"}} >"
                <img src="https://maqe-com-4-media-uploads.s3.ap-southeast-1.amazonaws.com/content/uploads/2020/04/07172748/IN_DEsignthinking_Cover-1.png" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary text-capitalize fw-bold">{props.title}</h5>
                        <hr/>
                        <p className="card-text">{props.desc}</p>
                        <a href="#post" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}