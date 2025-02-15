import axios from 'axios';

export const saveForm = (formName, formFields) => async (dispatch) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/forms/save', {
      form_name: formName,
      form_data: JSON.stringify(formFields),
    });

    console.log('Form saved successfully:', response.data);
    alert('Form saved successfully!');
  } catch (error) {
    console.error('Error saving form:', error);
    alert('Failed to save form.');
  }
};

export const fetchForm = (formId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/forms/${formId}`);
    dispatch({ type: 'SET_FORM_FIELDS', payload: JSON.parse(response.data.form_data) });
    dispatch({ type: 'SET_FORM_NAME', payload: response.data.form_name });
  } catch (error) {
    console.error('Error fetching form:', error);
    alert('Failed to fetch form.');
  }
};

export const updateForm = (formId, formName, formFields) => async (dispatch) => {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/api/forms/update/${formId}`, {
      form_name: formName,
      form_data: JSON.stringify(formFields),
    });

    console.log('Form updated successfully:', response.data);
    alert('Form updated successfully!');
  } catch (error) {
    console.error('Error updating form:', error);
    alert('Failed to update form.');
  }
};

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