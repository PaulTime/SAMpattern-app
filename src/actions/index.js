/**
 * Created by Home on 12.09.2017.
 */
import model from '../model'
// Actions
//

let actions = {} ;

actions.start = (data, present) => {
    present = present || model.present ;
    data.started = true ;
    present(data) ;
    return false ;
};
actions.end = (data, present) => {
    present = present || model.present ;
    data.started = false ;
    present(data) ;
    return false ;
};

actions.decrement = (data, present) => {
    present = present || model.present ;
    data = data || {} ;
    data.counter = data.counter || 10 ;
    let d = data ;
    let p = present ;
    setTimeout(function() {
        d.counter = d.counter - 1 ;
        p(d) ;
    }, 1000) ;
};

actions.launch = (data, present) => {
    present = present || model.present ;
    data.launched = true ;
    present(data) ;
};

actions.abort = (data, present) => {
    present = present || model.present ;
    data.aborted = true ;
    present(data) ;
    return false ;
};

export default actions