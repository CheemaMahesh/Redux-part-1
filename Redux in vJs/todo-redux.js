
// const redux=require("redux");


// //Actions
// const ADD_TODO="Add TODO";
// const TOGGLE_TODO="Toggle TODO";



// //Action creators
// const addTodo=(text)=>({text,type:ADD_TODO});
// const toggleTodo=(index)=>({index,type:TOGGLE_TODO});



// //intial state
// const initialState={
//     todos:[]
// }

// //Reducers 
// function todoReducer(state=initialState,action){
//     switch(action.type){
//         case ADD_TODO:
//             return{
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed:false
//                     }
//                 ]

//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos:state.todos.map((todo,i)=>{
//                     if(i===action.index){
//                         todo.completed=!todo.completed
//                     }
//                 })
//             }
//             default:
//                 return state;
//     }
// }

// //create store
// const store=redux.createStore(todoReducer);


// //dispatch actions
// store.dispatch(addTodo("Study at 8"));
// store.dispatch(addTodo("Office at 9"));
// store.dispatch(toggleTodo(0));



// //get data from store
// console.log(store.getState())




// action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators
const addTodo = (text) => ({ type: ADD_TODO, text });
const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });

// initial state
const initialState = {
  todos: [],
};

// reducer
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

// store
const redux = require('redux');

const store = redux.createStore(todoApp);

// dispatch actions
store.dispatch(addTodo('Learn Redux'));
store.dispatch(addTodo('Build an app'));
store.dispatch(toggleTodo(0));

// get the current state
console.log(store.getState());
