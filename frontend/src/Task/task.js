import React, { Component } from "react";
import { connect } from "react-redux";

class Task extends Component {
    render() {
        return (
            <h1>Dentro de Tareas</h1>
        )
    }
}

const taskComponent = connect()(Task);

export {taskComponent as Task}