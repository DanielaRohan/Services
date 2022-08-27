import { GrMenu } from 'react-icons/gr';
import '../Style/header.scss';

export const Header = function () {
    return (
        <div className='main-header' >
           <span><GrMenu/></span>
           <h1>Services for everthing</h1>
           <nav>
              <a href="/sign-in">Sign-in</a> <br/>
              <a href="/new-account">New account</a>
           </nav>
        </div>
    )
}