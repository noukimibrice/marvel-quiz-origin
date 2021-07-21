import React from 'react';
import batman from '../../images/batman.png'

const ErrorPage = () => {

    const centerH2 = {
        textAlign: 'center',
        marginTop: '50'
    }
    // const centerImg = {
    //     maxWidth: '500px',
    //     maxHeight: '500px',

    // }
    return(
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2}>Ouff cette page n'existe pas !</h2>
                <img src={batman} alt="Error page" />
            
            </div>

        </div>
    )
}
export default ErrorPage