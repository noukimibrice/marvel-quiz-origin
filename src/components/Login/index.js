import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase'

const Login = (props) => {
    const firebase = useContext(FirebaseContext); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);

    useEffect(()=>{
        if (password.length > 5 && email !== '' ) {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])
    
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        firebase.loginUser(email, password)
        
        props.history.push('/welcome')      

        
    }

    return(
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                   
                    <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            
                            <div className="inputBox">
                                <input onChange={handleEmail} value={email} type="mail" id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>

                            </div>
                            <div className="inputBox">
                                <input onChange={handlePassword} value={password} type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>

                            </div>

                            {btn ? (<button>Connexion</button>) : (<button disabled>Connexion</button>)}
                            
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Pas encore de compte ? Inscrivez vous</Link>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )

}
export default Login