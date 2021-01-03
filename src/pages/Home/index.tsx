import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => {
    return (
        <div className="row">
            <div className="col-6 home-container">
                <h2 className="home-title">
                    Desafio do Capítulo 3, <br />
                    Bootcamp DevSuperior
                </h2>

                <p className="home-description">
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />

                    <br />

                    Favor observar as instruções passadas no capítulo sobre a elaboração
                    deste projeto. <br />

                    <br />

                    Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                    Mateusz Wierzbicki: <a href="link">antforfigma@gmail.com</a>
                </p>

                <Link to="/search">
                    <Button text="Começar" />
                </Link>

            </div>
        </div>
    );
};

export default Home;