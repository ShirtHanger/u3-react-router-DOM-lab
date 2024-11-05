import { Link } from 'react-router-dom'

const MailboxList = (props) => {

    return (
        <>
        <h2>Mailboxes!</h2>
        <ul>
            {props.mailbox.map((mail) => (
                <li key={mail.boxholderRealName}>
                
                <Link to={`/pokemon/${mail._id}`}>
                  {mail.boxholderRealName} ({mail.boxholderUsername})
                </Link>
                
                </li>
            ))}
        </ul>
        </>
    )
}

export default MailboxList