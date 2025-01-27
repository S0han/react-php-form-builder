import TextInput from './components/textInput';
import TextArea from './components/textArea';
import SelectDropdown from './components/dropDown';
import Checkbox from './components/checkBox';
import RadioButtons from './components/radioButtons';
import DatePicker from './components/datePicker';
import FileUpload from './components/fileUpload';

const App = () => {
    return (
      <div>
        <TextInput />
        <TextArea />
        <SelectDropdown />
        <Checkbox />
        <RadioButtons options={['test']} />
        <DatePicker />
        <FileUpload />
      </div>
    );
  };
  
  export default App;