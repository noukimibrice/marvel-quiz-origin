import React, {useRef, useEffect, useState, Fragment} from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {

    const refImage = useRef(null);
    console.log(refImage)

    const [btn, setBtn] = useState(false);

    useEffect(()=> {

     refImage.current.classList.add("startingImg");

     setTimeout(()=> {
        refImage.current.classList.remove("startingImg");
        setBtn(true)
     }, 1000);

    },[])

    const setLeftImg = () => {
        refImage.current.classList.add("leftImg");
        // refImage.current.classList.remove("leftImg");
    }
    const setRightImg = () => {
        refImage.current.classList.add("rightImg");
        // refImage.current.classList.remove("leftImg");
    }

    const clearImg = () => {
        if (refImage.current.classList.contains("leftImg")) {
            refImage.current.classList.remove("leftImg");
        } else if (refImage.current.classList.contains("rightImg")) {
            refImage.current.classList.remove("rightImg");
        }
    }
    
    

   const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link className="btn-welcome" to="/signup">Inscription</Link>
            </div>

            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </Fragment>
    )

    return(
        <main ref={refImage} className="welcomePage">
            {displayBtn}
        </main>
    )
}
export default Landing