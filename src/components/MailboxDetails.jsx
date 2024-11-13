// src/components/MailboxDetails.jsx
import { useParams } from "react-router-dom" //Required to access specific ID of selected Mailbox

const MailboxDetails = (props) => {

    
    const { mailboxId } = useParams()

    
    const singleMailbox = props.mailbox.find((mail) => 
        mail._id === Number(mailboxId)) 

    if (!singleMailbox) {
      return(<h2>Mailbox not found!</h2>)

    } else {
      
      return (
        <>
          <h2>Mailbox #{singleMailbox._id} ({singleMailbox.boxholderUsername})</h2>
          {/* This is a detail list tag, key value pairs, google it */}
          <dl>
            <h3>{singleMailbox.boxholderRealName}</h3>
            <dt>Account Name</dt>
            <dd>{singleMailbox.boxholderUsername}</dd>
            <dt>Account Password</dt>
            <dd>************ (Did you actually expect to see this?🤨)</dd>
            <dt>Profession</dt>
            <dd>{singleMailbox.boxholderProfession}</dd>
            <dt>Location</dt>
            <dd>{singleMailbox.boxholderLocation}</dd>
            <dt>Box Size</dt>
            <dd>{singleMailbox.boxSize}</dd>
          </dl>
        </>
      )
    }
  }
  
  export default MailboxDetails
  