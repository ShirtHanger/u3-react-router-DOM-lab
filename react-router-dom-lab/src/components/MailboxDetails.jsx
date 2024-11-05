// src/components/MailboxDetails.jsx
import { useParams } from "react-router-dom" //Required to access specific ID of selected Mailbox

const MailboxDetails = (props) => {
    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the ID of selected Mailbox into a variable
    const { mailboxId } = useParams()
    console.log('Mailbox ID:', mailboxId)

    // Locates mailbox with find(), so we can render data of that Mailbox only!
    const singleMailbox = props.mailbox.find((mail) => 
        mail._id === Number(mailboxId)) /* Finds mailbox by its ID, must convert to number */
    console.log('Mailbox Object:', singleMailbox)

    return (
      <>
        <h2>Details of {singleMailbox.boxholderRealName}'s mailbox</h2>
        {/* This is a detail list tag, key value pairs, google it */}
        <dl>
          <dt>Owner</dt>
          <dd>{singleMailbox.boxholderRealName}</dd>
          <dt>Account Name</dt>
          <dd>{singleMailbox.boxHolderUsername}</dd>
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
  
  export default MailboxDetails
  