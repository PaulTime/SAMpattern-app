/**
 * Created by Home on 12.09.2017.
 */
// View
//
import React from 'react';
import ReactDOM from 'react-dom';
import actions from '../actions'
// import model from '../model'
let view = {} ;

// Initial State
view.init = model => {
    return view.ready(model) ;
};

// State representation of the ready state
view.ready = model => {
    return (
        <main className="main">
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>ID</th>
                </tr>
                {
                    model.users && model.users.map(user => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.id}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </main>
    )

};

view.loading = model => <div className="loading-wrap">Loading...</div>;

view.noUsers = model => <div className="noUsers-wrap">You have no users</div>;

// State representation of the counting state
view.layout = children => {
    return (
        <div className="app-wrapper layout">
            <button onClick={() => actions.load({},false)}>Get Users</button>
            <button onClick={() => actions.deleteAll({},false)}>Delete Users</button>
            {children}
        </div>
    ) ;

};

//display the state representation
view.display = representation =>  {
    let stateRepresentation = view.layout(representation);
    // stateRepresentation.innerHTML = representation;
    ReactDOM.render(stateRepresentation, document.getElementById('root'));
};

// view.display = representation => representation
export default view;