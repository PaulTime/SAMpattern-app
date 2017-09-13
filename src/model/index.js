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

model.present = (data) => {
    console.log('present state=> ',data);
    // if (state.counting(model)) {
    //     if (model.counter === 0) {
    //         model.launched = data.launched || false ;
    //     }
    if (state.notFetched(model)){
        console.log('state.notFetched(model) => ',data);
        model.fetchUsers = data.fetchUsers;
    }

    if (data.users){
        model.users = data.users;
        console.log('res data=> ',data);
    }

    if (state.fetching(model) && !data.fetchUsers){
        model.fetchUsers = data.fetchUsers;
        console.log('state.fetching(model) => ',data);
    }

    if (data ==='deleteAll'){
        model.users = []
    }
    // if (state.fetchDone(model)) {
    //     console.log('state.fetching(model)!',state.fetching(model));
    //     model.fetchUsers = data.fetchUsers;
    // }
    // model.users = data.users;
    state.render(model) ;
};

export default model
