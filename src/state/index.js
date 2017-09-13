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
state.notFetched = model => !model.fetchUsers && !model.users.length;

state.fetching = model => model.fetchUsers;

state.fetchDone = model => !model.fetchUsers && !!model.users.length;


state.representation = model => {
    let representation = 'oops... something went wrong, the system is in an invalid state' ;
    console.log(state,view);

    if (state.notFetched(model)) {
        console.log('state is fetching');
        representation = view.noUsers(model) ;
    }

    if (state.fetching(model)) {
        console.log('state is fetching');
        representation = view.loading(model) ;
    }

    console.log('representation => ',representation);
    view.display(representation) ;
};

// Next action predicate, derives whether
// the system is in a (control) state where
// an action needs to be invoked

state.nextAction = model => {
    if (state.fetching(model)) {
        actions.fetchUsers({},model.present)
    }
};

state.render = model => {
    console.log('render => ',model, state);
    state.representation(model);
    state.nextAction(model);
};

export default state;
