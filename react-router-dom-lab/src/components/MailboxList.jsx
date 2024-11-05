import { Link } from 'react-router-dom'

const MailboxList = (props) => {

    return (
        <>
        <h2>Mailboxes!</h2>
        <ul>
            {props.mailbox.map((mail) => (
                <li key={mail.boxholderRealName} className='mail-box'>
                
                <Link to={`/mailboxes/${mail._id}`}>
                  <h4>{mail.boxholderRealName} (#{mail._id})</h4> 
                  <strong>({mail.boxholderUsername}</strong>)
                </Link>

                </li>
            ))}
        </ul>
        </>
    )
}

export default MailboxList