/**
 * Created by Home on 12.09.2017.
 */
import state from '../state'
export const COUNTER_MAX = 10 ;

let model = {
    // counter: COUNTER_MAX,
    users:[],
    fetchUsers:false
} ;

model.present = data => {
    console.log('present state=> ',state);
    // if (state.counting(model)) {
    //     if (model.counter === 0) {
    //         model.launched = data.launched || false ;
    //     }
    if (state.notFetched(model)){
        model.fetchUsers = data.fetchUsers;
    }
    if (state.fetching(model)){
        model.users = data.users;
    }
    state.render(model) ;
};

export default model
