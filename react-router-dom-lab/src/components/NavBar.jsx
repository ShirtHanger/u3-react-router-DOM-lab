import { Link } from 'react-router-dom' // Must import link functionality from RRD

const NavBar = () => {
    return (
        <nav>
            <ul> {/* Wrap each link in a <Link> component, 
            functional, clickable link! */}
                <li> 
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/mailboxes'>Mailboxes</Link>
                </li>
                <li>
                    <Link to ="/new-mailbox">New Mailbox</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar