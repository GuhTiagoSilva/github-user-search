import React, { useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/request';
import './styles.scss';


const Search = () => {

    const [user, setUser] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleOnClick = () => {
        makeRequest({ method: 'GET', url: `/${user}` }).then(response => {
            console.log(response.data);
        });
    }

    return (
        <div className="search-profile-container container">
            <div className="row find-user-container">
                <div className="col-8">
                    <h1>Encontre um perfil Github</h1>
                    <input type="text" value={user} className="form-control find-user" placeholder="Usuário Github"
                        onChange={handleOnChange} />
                </div>
            </div>
            <Button text="Encontrar" onClick={handleOnClick} />
        </div>
    );
};

export default Search;