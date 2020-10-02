import React, {useState} from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [ {
    label: 'Afrikaans',
    value: 'af'
}, 
{
    label: 'Arabic',
    value: 'ar'
},
{
    label: 'English',
    value: 'en'
},
{
    label: 'Hindi',
    value: 'hi'
}];

const Translate = () => {

const [selectedLanguage, setSelectedLanguage] = useState('en');
const [textInput, setTextInput] = useState('');

    return (<div className='ui form'>
        <h1>Translate App</h1>
        <div className='field'>
            <label>Enter Text:</label>
        <input type='text' value={textInput} onChange={(event)=> setTextInput(event.target.value)}></input>
        </div>
        <Dropdown options={options} selection={selectedLanguage} onSelectedChange={setSelectedLanguage} label='Select a Language'/>
        <hr />
        <h3 className="ui header">Output</h3>
        <Convert language={selectedLanguage} text={textInput}/>
        </div>);
}

export default Translate;