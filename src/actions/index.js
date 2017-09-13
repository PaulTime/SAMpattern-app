/**
 * Created by Home on 12.09.2017.
 */
import model from '../model'
import axios from 'axios'


// Actions
//

let actions = {} ;

actions.fetchUsers = (data = {}, present) => {
    let users = [];
    present = present || model.present;
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            users = res.data;
            data.users = users ;
            data.fetchUsers = false ;
            present(data);
            return false ;
        })
        .catch(err => {throw err});
};
actions.load = (data = {}, present) => {
    present = present || model.present ;
    console.log('present =>', present)
    data.fetchUsers = true;
    present(data) ;
    return false ;
};


export default actions