const { createStore } = Redux;

// Initial state of application
const initState = {
    todos: [],
    posts: []
}

// Reducer - For updating the state of the central data store
// A reducer is a fxn that interacts with the store
function myreducer(state = initState, action) {
    if (action.type == 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }
    if (action.type == 'ADD_POST') {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }
}

// Redux: Central store, represents the global state of application
const store = createStore(myreducer);

// Subscribe - Checks for changes in the central store
store.subscribe(() => {
    console.log('state updated');
    console.log(store.getState());
});

// Action & Disptach - Changes to be made are (ie actions) are 
// passed to reducer by the Dispacth
store.dispatch({type: 'ADD_TODO', todo: 'buy milk'});
store.dispatch({type: 'ADD_POST', todo: 'sleep some more'});
