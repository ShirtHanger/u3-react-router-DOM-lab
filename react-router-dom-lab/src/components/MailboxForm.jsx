// src/components/MailboxForm.jsx

/* This is basically a CREATE form, user can insert Mailbox into the list */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Allows navigation on clicks and stuff


const initialState = {
  boxholderRealName: ``,
  boxholderUsername: ``,
  boxSize: ``,
  boxholderLocation: ``,
  boxholderProfession: ``
}

const MailboxForm = (props) => {
    
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate(); // Allows navigation on clicks and stuff

  function handleSubmit (event) {
    event.preventDefault()
    props.addMailbox(formData)
    setFormData(initialState)
    navigate('/mailboxes') // Navigates to new page
  }

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="boxholderRealName">Name:</label>
        <input
          type="text"
          id="boxholderRealName"
          name="boxholderRealName"
          value={formData.boxholderRealName}
          onChange={handleChange}
        />

        <label htmlFor="boxholderUsername">Username:</label>
        <input
          type="text"
          id="boxholderUsername"
          name="boxholderUsername"
          value={formData.boxholderUsername}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Size:</label>
        <select name="boxSize" id="boxSize" onChange={handleChange}>
          
          <option value={formData.boxSize}>Small</option>
          <option value={formData.boxSize}>Medium</option>
          <option value={formData.boxSize}>Large</option>
          
        </select>

        <label htmlFor="boxholderLocation">Location:</label>
        <input
          type="text"
          id="boxholderLocation"
          name="boxholderLocation"
          value={formData.boxholderLocation}
          onChange={handleChange}
        />

        <label htmlFor="boxholderProfession">Profession:</label>
        <input
          type="text"
          id="boxholderProfession"
          name="boxholderProfession"
          value={formData.boxholderProfession}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default MailboxForm