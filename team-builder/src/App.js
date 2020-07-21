import React, { useState } from 'react';
import './App.css';
import TeamForm from './form.jsx';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  
  const [formValues, setFormValues] = useState([])
  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = {...formValues, [inputName]: inputValue}
  setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

  }



  return (
    <div className='container'>
      <header><h1>Team Members</h1></header>
      <TeamForm
      values={formValues}
      update={updateForm}
      submit={submitForm}/>


    </div>
  )
}

export default App;
