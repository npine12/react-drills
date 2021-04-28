import React, { Component } from "react";
import ToDo from './ToDo'



class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            text: ''
        }
    }
    render() {
        return <div>
            <input value={this.state.text} onChange={event => this.setState({ text: event.target.value })} type='text' />
            <button onClick={event => {
                this.setState({ tasks: [...this.state.tasks, this.state.text], text: '' })
            }}>Add</button>
            <ToDo tasks={this.state.tasks} /></div>
    }
}

export default NewTask