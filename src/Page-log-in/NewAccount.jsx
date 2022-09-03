import '../Style/new-account.scss';
export const NewAccount = function () {
    return (
        <div className="new-account">
            <h1>Register here</h1>
            <form className='input-box' >
                 <input type="text" placeholder="Name"/>
                 <input type="text" placeholder="Surname"/>
                 <input type="adrress" placeholder="Current address" />
                 <input type="number" placeholder="Phone" />
                 <input type="email" placeholder="Email" />
                 <input type="text" placeholder="Service category" />
                 <input type="password" placeholder="Password" />
                 <input type="password" placeholder="Confirm password" />
                 <button className='register-btn'>SUBMIT</button>
            </form>
        </div>
    )
}