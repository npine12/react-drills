import React from 'react'

function ToDo(props) {
    return <ul> {props.tasks.map((task, i) => <li key={i}>{task}</li>)}</ul>
}

export default ToDo