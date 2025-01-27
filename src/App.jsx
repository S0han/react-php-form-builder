import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addField, reorderFields, updateLabel, updatePlaceholder } from './redux/actions/formFieldActions';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TextInput from './components/textInput';
import TextArea from './components/textArea';
import DropDown from './components/dropDown';
import CheckBox from './components/checkBox';
import DatePicker from './components/datePicker';
import RadioButtons from './components/radioButtons';
import FileUpload from './components/fileUpload';

const App = () => {
  const dispatch = useDispatch();
  const formFields = useSelector((state) => state.formFields);

  const handleAddField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: "New Label",
      placeholder: "",
      required: false,
    };

    dispatch(addField(newField));
  };

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const reorderedFields = Array.from(formFields);
    const [movedField] = reorderedFields.splice(source.index, 1);
    reorderedFields.splice(destination.index, 0, movedField);

    dispatch(reorderFields(reorderedFields));
  };

  return (
    <div>
      <button onClick={() => handleAddField("textInput")}>Add Text Input</button>
      <button onClick={() => handleAddField("textArea")}>Add Text Area</button>
      <button onClick={() => handleAddField("selectDropdown")}>Add Select</button>
      <button onClick={() => handleAddField("checkbox")}>Add Checkbox</button>
      <button onClick={() => handleAddField("datePicker")}>Add Date Picker</button>
      <button onClick={() => handleAddField("radioButtons")}>Add Radio Buttons</button>
      <button onClick={() => handleAddField("fileUpload")}>Add File Upload</button>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="formFields">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                padding: 10,
                backgroundColor: "#f9f9f9", // Optional for better visibility
                borderRadius: 5,
              }}
            >
              {formFields.map((field, index) => (
                <Draggable key={field.id} draggableId={String(field.id)} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        padding: 10,
                        margin: 5,
                        border: "1px solid gray",
                        backgroundColor: "#f4f4f4",
                        borderRadius: 4, // Optional for smoother corners
                      }}
                    >
                      {field.type === "textInput" && <TextInput {...field} />}
                      {field.type === "textArea" && <TextArea {...field} />}
                      {field.type === "selectDropdown" && <DropDown {...field} />}
                      {field.type === "checkbox" && <CheckBox {...field} />}
                      {field.type === "datePicker" && <DatePicker {...field} />}
                      {field.type === "radioButtons" && <RadioButtons {...field} />}
                      {field.type === "fileUpload" && <FileUpload {...field} />}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;