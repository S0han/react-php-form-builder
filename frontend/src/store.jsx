import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

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
    case "UPDATE_OPTIONS":
      return state.map((field) =>
        field.id === action.payload.fieldId
          ? {
              ...field,
              options:
                action.payload.optionIndex !== null
                  ? field.options.map((option, index) =>
                      index === action.payload.optionIndex
                        ? action.payload.value
                        : option
                    )
                  : [...field.options, action.payload.value], // Add new option if index is null
            }
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
  applyMiddleware(thunk)
);

export default store;