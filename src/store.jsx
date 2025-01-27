import { createStore, combineReducers } from "redux";

const formReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FIELD":
      return [...state, action.payload];
    case "REORDER_FIELDS":
      return action.payload;
    case "UPDATE_LABEL":
      return state.map((field) =>
        field.id === action.payload.id
          ? { ...field, label: action.payload.newLabel }
          : field
      );
    case "UPDATE_PLACEHOLDER":
      return state.map((field) =>
        field.id === action.payload.id
          ? { ...field, placeholder: action.payload.newPlaceholder }
          : field
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  formFields: formReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;