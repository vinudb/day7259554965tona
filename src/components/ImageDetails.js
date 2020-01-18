import React, { useState } from 'react';


const ImageDetails = (props) => {
    const [clicked, setClick] = useState(false)
    return (
        props.imageDetails.features.length > 0 &&
        <div>
            <div className='titleContainer'>
                <h3 className='componentHeading fontHeadingColor'>Detail</h3>
            </div>
            <div className='detailsTopContainer fontHeadingColor'>
                <img className='detailsImage' src={props.imageDetails.url} />
                <div className='detailsTopDescription'>
                    <h1>{props.imageDetails.title}</h1>
                    <h3 className='fontHeadingColor'>Quantity: <span className=''>{props.imageDetails.quantity}</span></h3>
                    <h3>Description: </h3>
                    <span>{props.imageDetails.description}</span>
                </div>
            </div>


            <h3 className='fontHeadingColor'>Features: </h3>
            {props.imageDetails.features.map((feature, index) => {
                return <div className='fontHeadingColor' key={index}>{`${index + 1}. ${feature}`}</div>
            })}

            <div className='footerBtnContainer'>
                <button className='button' disabled={props.imageDetails.features.length == 0} onClick={() => {
                    setClick(true)
                    props.onScanClick(props.imageDetails.url)
                }}>Scan Now</button>
            </div>
            {(props.imageText === '' && clicked) ? <div className='imageText'>Scanning the image...</div> :
                (clicked) &&
                <div className='imageText'>{props.imageText}</div>}
        </div>
    )
}

export default ImageDetails;