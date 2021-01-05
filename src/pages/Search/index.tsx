import React, { useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/request';
import InfoLoader from './Loaders/InfoLoader';
import Profile from './Profile';
import './styles.scss';


const Search = () => {

    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleOnClick = () => {
        setIsLoading(true);
        makeRequest({ method: 'GET', url: `/${user}` }).then(response => {
            console.log(response.data);
        }).finally(()=>{
            setIsLoading(false);
        });
    }

    return (
        <>
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

            {
                isLoading ? <InfoLoader /> : <Profile />
            }
        </>

    );
};

export default Search;