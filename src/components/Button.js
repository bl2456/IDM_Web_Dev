import React from 'react';
import '../css/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-secondary'];
const SIZES = ['btn-medium', 'btn-large'];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    path
}) => {
    const actualButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const actualButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to={path} className='btn-mobile'>
            <button 
            className={`btn ${actualButtonStyle} ${actualButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    );
}

export default Button;