import React from 'react';

function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='submit button'>
                <h2>Add a Team Member</h2>
                <button>Submit</button>
            </div>
            <div className='form inputs'>
                <label htmlFor='Team Member'>Name:&nbsp;
                    <input
                    id='nameInput'
                    name='name'
                    type='text'
                    placeholder='Team Member Name'
                    maxLength='20'
                    value={values.name}
                    onChange={onChange}/>
                </label>
                <label htmlFor='Email'>Email:&nbsp;
                <input
                id='emailInput'
                name='email'
                type='email'
                placeholder='Enter email'
                maxLength='30'
                value={values.email}
                onChange={onChange}/>
                </label>
                <label>Role&nbsp;
                    <select
                        name='role'
                        value={values.role}
                        onChange={onChange}>
                        <option value=''>Select an Option</option>
                        <option value='option 1'>Option 1</option>
                        <option value='option 2'>Option 2</option>
                    </select>
                </label>
            </div>
        </form>
    )
}

export default TeamForm