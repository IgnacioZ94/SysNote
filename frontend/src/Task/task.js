//CODIGO DE VIDEO FUNCIONA OK
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
//CODIGO DE VIDEO FUNCIONA OK

//*2*ESTO FUNCIONA
//import React from "react";
//
//function Task() {
//    return (
//        <h1>Dentro de Tareas</h1>
//    )
//}
//
//export default Task;
//*2*ESTO FUNCIONA


