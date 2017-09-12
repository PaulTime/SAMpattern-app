/**
 * Created by Home on 12.09.2017.
 */
import state from '../state'
export const COUNTER_MAX = 10 ;

let model = {
    counter: COUNTER_MAX,
    started: false,
    launched: false,
    aborted: false
} ;

model.present = data => {
    console.log('present state=> ',state);
    // if (state.counting(model)) {
    //     if (model.counter === 0) {
    //         model.launched = data.launched || false ;
    //     } else {
    //         model.aborted = data.aborted || false ;
    //         if (data.counter !== undefined) { model.counter = data.counter ; }
    //     }
    // } else {
    //     if (state.ready(model)) {
    //         model.started = data.started || false ;
    //     }
    // }
    model.started = data.started
    state.render(model) ;
};

export default model
