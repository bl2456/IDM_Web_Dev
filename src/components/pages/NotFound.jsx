import React from "react";
import '../../css/NotFound.css';

import Button from '../Button';

const NotFoundPage = () => {
    return (
        <div className="NotFoundContainer">
            <h1 className="ErrorMessage">Opps, this page don't exist fam. 404 not found!</h1>
            <div id="returnButtonContainer">
                <Button buttonStyle='btn-secondary' path='/'>Another Button to Return Home</Button>
            </div>
        </div>
    );
}

export default NotFoundPage;