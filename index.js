const redux = require("redux");
const createStore = redux.createStore;

// Constants
const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE_TO_STORE = "ADD_CAKE_TO_STORE";

// Action Creator
function buyCakeAction() {
  return { type: BUY_CAKE, info: "First redux action" };
}

const addCakeToStore = () => {
  return {
    type: ADD_CAKE_TO_STORE,
    info: "Add cake to store increases count.",
  };
};

// state
const initialState = {
  numOfCakes: 10,
};

// Reducer :
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
      break;

    case ADD_CAKE_TO_STORE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
      return;

    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCakeAction());
store.dispatch(addCakeToStore());
store.dispatch(buyCakeAction());
store.dispatch(addCakeToStore());
store.dispatch(addCakeToStore());
store.dispatch(addCakeToStore());
store.dispatch(addCakeToStore());
store.dispatch(addCakeToStore());
store.dispatch(buyCakeAction());
unsubscribe();
