export const addField = (field) => {
    return {
      type: "ADD_FIELD",
      payload: field,
    };
};
  
export const reorderFields = (fields) => {
    return {
        type: "REORDER_FIELDS",
        payload: fields,
    };
};

export const updateLabel = (id, newLabel) => {
    return {
        type: "UPDATE_LABEL",
        payload: { id, newLabel },
    };
};

export const updatePlaceholder = (id, newPlaceholder) => {
    return {
        type: "UPDATE_PLACEHOLDER",
        payload: { id, newPlaceholder },
    };
};

export const updateOptions = (fieldId, optionIndex, value) => {
    return {
      type: "UPDATE_OPTIONS",
      payload: {
        fieldId,
        optionIndex,
        value,
      },
    };
};
  