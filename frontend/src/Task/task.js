import React, { Component } from "react";
import { connect } from "react-redux";

class Task extends Component {
    render() {
        return (
            <h1>Dentro de Tareas</h1>
        );
    }
}

const taskComponent = connect()(Task);

export {taskComponent as Task}

//*1*Intento de exportar el component Task como const en vez de como Class
//export const Task = props => {
//    return (
//      <div>
//        <h1>Landing Page</h1>
//      </div>
//    );
//};
