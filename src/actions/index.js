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
    console.log('nexAction fetchUsers! ACTION before Promise');
    setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                users = res.data;
                data.users = users ;
                console.log('nexAction fetchUsers! ACTION THEN Promise',data);
                present(data);
                return false ;
            })
            .catch(err => {throw err});
    },3000)

};

actions.load = (data = {}, present) => {
    present = present || model.present ;
    data.fetchUsers = true;
    console.log('load data =>', data);
    present(data) ;
    return false ;
};

actions.deleteAll = (data = {}, present) => {
    present = present || model.present ;
    data = 'deleteAll';
    console.log('load data =>', data);
    present(data) ;
    return false ;
};

actions.finish_load = (data = {}, present) => {
    present = present || model.present ;
    data.fetchUsers = false;
    console.log('finish load data =>', data);
    return
    present(data) ;
    return false ;
};

export default actions