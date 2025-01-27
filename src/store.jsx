import { createStore } from "redux";

const initialState = {
  formFields: []
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FIELD":
      return {
        ...state,
        formFields: [...state.formFields, action.payload],
      };
    case "REMOVE_FIELD":
      return {
        ...state,
        formFields: state.formFields.filter(field => field.id !== action.payload),
      };
    default:
      return state;
  }
}

const store = createStore(formReducer);

export default store;