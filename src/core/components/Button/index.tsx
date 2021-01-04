import React from 'react';
import './styles.scss';

type Props = {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ text, onClick }: Props) => {
    return (
        <button className="btn btn-primary button-start" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;