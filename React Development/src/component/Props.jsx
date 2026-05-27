import React from 'react'
function Props(props) {
    
    return (
        <>
            <h1 class= "text-blue-300">Props</h1>
            <h2>My {props.name}</h2>
            <h3>My {props.roll}</h3>
            <h3>My {props.course}</h3>
        </>
    )
}
export default Props;