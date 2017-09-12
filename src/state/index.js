/**
 * Created by Home on 12.09.2017.
 */
import model, {COUNTER_MAX} from '../model'
import view from '../view'
import actions from '../actions'
// State
//

let state = {view} ;
// console.log('view=> ',view);
// model.state = state ;

// Derive the state representation as a function of the system
// control state


// Derive the current state of the system
state.ready = model => {
    return ((model.counter === COUNTER_MAX) && !model.started && !model.launched && !model.aborted) ;
};

state.counting = model => {
    return ((model.counter <= COUNTER_MAX) && (model.counter >= 0) && model.started && !model.launched && !model.aborted) ;
};

state.launched = model => {
    return ((model.counter === 0) && model.started && model.launched && !model.aborted) ;
};

state.text = model => {
    return model.started ;
}

state.aborted = model => {
    return (
    (  model.counter <= COUNTER_MAX) && (model.counter >= 0)
    && model.started && !model.launched && model.aborted ) ;
};

state.representation = model => {
    let representation = 'oops... something went wrong, the system is in an invalid state' ;
    console.log(state,view);
    if (state.ready(model)) {
        console.log('ready');
        representation = view.ready(model) ;
    }

    if (state.counting(model)) {
        console.log('counting');
        representation = view.counting(model) ;
    }

    if (state.launched(model)) {
        representation = view.launched(model) ;
    }

    if (state.aborted(model)) {
        representation = view.aborted(model) ;
    }
    console.log('representation => ',representation)
    view.display(representation) ;
};

// Next action predicate, derives whether
// the system is in a (control) state where
// an action needs to be invoked

state.nextAction = model => {
    if (state.counting(model)) {
        if (model.counter>0) {
            actions.decrement({counter: model.counter},model.present) ;
        }

        if (model.counter === 0) {
            actions.launch({},model.present) ;
        }
    }
};

state.render = model => {
    console.log('render => ',model, state);
    state.representation(model);
    // state.nextAction(model);
};

export default state;
