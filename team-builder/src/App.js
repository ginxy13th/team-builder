import React, { useState, useEffect } from 'react';
import './App.css';
import TeamForm from './form.jsx';
import { v4 as uuid } from 'uuid';
import TeamMember from './TeamMemebers'

const initialTeamMember = [{
  id: uuid(),
  name: 'name',
  email: 'email@email.com',
  role:'role',
},]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamMember})
}

const fakeAxiosPost = (url, {name, email, role}) => {
  
  const newMember = {id: uuid(), name, email, role }
  return Promise.resolve({ status:300, success:true, data: newMember})
}

function App() {
  const [members, setMember] = useState([])
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
    console.log('Clicked')
    if (!newTeamMember.name || !newTeamMember.email ||!newTeamMember.role) return
      fakeAxiosPost('fakeapi.com', newTeamMember)
      .then(response => {
        const memberFromAPI = response.data
        console.log(response.data)
        setMember([...members, memberFromAPI])
        setFormValues(initialFormValues)
      })
  }

  useEffect(() =>{
    fakeAxiosGet('fakeapi.com').then(response => setMember(response.data))
  }, [])

  return (
    <div className='container'>
      <header><h1>Team Members</h1></header>
      <TeamForm
      values={formValues}
      update={updateForm}
      submit={submitForm}/>

      {members.map(member => {
        return (
          <TeamMember key={member.id} details={member}/>
        )
      })}
    </div>
  )
}

export default App;
