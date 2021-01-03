import React from 'react';
import Button from '../../core/components/Button';
import './styles.scss';

const Search = () => {
    return (
        <div className="search-profile-container container">
            <div className="row find-user-container">
                <div className="col-8">
                    <h1>Encontre um perfil Github</h1>
                    <input type="text" className="form-control find-user" placeholder="Usuário Github" />
                </div>
            </div>
            <Button text="Encontrar"/>
        </div>
    );
};

export default Search;