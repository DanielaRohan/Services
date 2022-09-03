import '../Style/signIn.scss';
import { AiOutlineEyeInvisible, AiOutlineMail } from "react-icons/ai";

export const SignIn = function () {
    return (
      <div className='sign-in'>
         <div className='form-box'>
            <h1>Login here</h1>
            <div className='input-box'>
                <AiOutlineMail />
                <input type="email" placeholder='Email ID' />
            </div>
            <div className='input-box'>
                <span className='eye' id='hide' >
                    <AiOutlineEyeInvisible />
                </span>
                <input type='password' placeholder='Password' id='myInput' />
            </div>
            <button type='button' className='login-btn' >LOGIN</button>
         </div>
    </div>
    )
}