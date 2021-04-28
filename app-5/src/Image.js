import React from 'react'
function Image(props) {
    console.log(props)
    return <img src={props.url} />
}


export default Image