import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './_helpers';
import {App} from './app';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

//function app() {
//    const retorned = (
//    <Provider store={store}>
//        <App />
//    </Provider>
//    );
//    ReactDOM.render(retorned, document.getElementById('root'));
//}
//
//app();
//const retorned = () => {
//    return (
//        <Provider store={store}>
//            <App />
//        </Provider>
//    )
//}
//
//ReactDOM.render(<retorned />, document.getElementById('root'))