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

{/*<div>*/}
    {/*<p>{`Counter:${model.counter}`}</p>*/}
    {/*<div onClick={() => actions.start({})}>*/}
        {/*<input type="submit" value="Start"/>*/}
    {/*</div>*/}
{/*</div>*/}
// State representation of the ready state
view.ready = model => {
    return (
       <div onClick={() => actions.start({})}>ready</div>
    )

};
{/*<div>*/}
{/*<p>`Count down: ${model.counter}`</p>*/}
{/*<div onClick={actions.abort({})}>*/}
{/*<input type="submit" value="Abort"/>*/}
{/*</div>*/}
{/*</div>*/}
// State representation of the counting state
view.counting = model => {
    console.log('counting action!, model => ',model)
    return (
        <div onClick={() => actions.end({})}>COUNTING</div>

    ) ;

};

// State representation of the aborted state
view.aborted = model => {
    return (
        <p>`Aborted at Counter:${model.counter}`</p>
    ) ;

};

// State representation of the launched state
view.launched = model =>{
    return (
        <p>Launched</p>
    ) ;

};

//display the state representation
view.display = representation =>  {
    // let stateRepresentation = document.getElementById("root");
    // stateRepresentation.innerHTML = representation;
    ReactDOM.render(representation, document.getElementById('root'));
};

// view.display = representation => representation
export default view;