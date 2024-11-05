// src/App.jsx
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import MailboxList from './components/MailboxList'
import NavBar from './components/NavBar'

import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'

import mailboxArray from './global' /* Importing my mailbox array for easier organization */

import './index.css'

const App = () => {
  const [mailbox, setMailbox] = useState(mailboxArray)

  function addMailbox(newMailboxData) {
    newMailboxData._id = mailbox.length + 1
    setMailbox([...mailbox, newMailboxData]) // Appends new mailbox to the list
  }

  return (
    <>
      <h1>NYC Mailboxes!</h1>
      <NavBar />
      <Routes>

        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        
        <Route path="/mailboxes" element={<MailboxList mailbox={mailbox} />} />

        {/* Route for updating Mailbox list (CREATE) */}
        <Route 
        path="/new-mailbox" 
        element={<MailboxForm addMailbox={addMailbox} />} /> {/* Pass addMailbox down into form, so we can update the array! */}

        <Route /* Route for specific mailbox details, when you click on Mailbox Link */
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailbox={mailbox} />}
        />

        {/* CATCH-ALL DEFAULT ROUTE, for errors */}
        <Route path="*" element={<h2>Mailbox not found!</h2>} />
      </Routes>
    </>
  )
}

export default App