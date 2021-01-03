import React from 'react';
import './styles.scss';


type Props = {
    text: string;
}

const Button = ({ text }: Props) => {
    return (
        <button className="btn btn-primary button-start">
            {text}
        </button>
    );
}

export default Button;