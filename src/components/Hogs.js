import React from 'react'

function Hogs(props) {
    return(
        <>
            <h2>{props.name}</h2>
            <img src={props.image}/>
        </>

    )
}

export default Hogs