import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8w2fmSKkoT0JF7Vvv9bX7AWZgI-j0AgE",
    authDomain: "marvel-quiz-11258.firebaseapp.com",
    projectId: "marvel-quiz-11258",
    storageBucket: "marvel-quiz-11258.appspot.com",
    messagingSenderId: "508455620388",
    appId: "1:508455620388:web:5ffc423f41bb73cf006db1"
};
class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth();
    }

    //Inscription
    signupUser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password)  
    }
    //Connexion
    loginUser = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)
    }

    //Déconnexion
    signoutUser = () => {
        this.auth.signOut()
    }
}
export default Firebase; 