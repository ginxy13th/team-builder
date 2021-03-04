import React from 'react';

function TeamMember(props) {
    const {details} = props

    if (!details) {
        return <h3>Tracking Down Your Team Members</h3>
    }
    return (
        <div className='member container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}
export default TeamMember