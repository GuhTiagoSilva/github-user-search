import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../../core/components/Button';
import { GitHubProfile } from '../../core/types/GitHubProfile';
import { makeRequest } from '../../core/utils/request';
import InfoLoader from './Loaders/InfoLoader';
import Profile from './Profile';
import './styles.scss';


const Search = () => {

    const [userName, setUserName] = useState('');
    const [profile, setProfile] = useState<GitHubProfile>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleOnClick = () => {
        setIsLoading(true);
        makeRequest({ method: 'GET', url: `/${userName}` }).then(response => {
            setProfile(response.data);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <>
            <div className="search-profile-container container">
                <div className=" row find-user-container">
                    <div className="col-8">
                        <h1>Encontre um perfil Github</h1>
                        <input type="text" value={userName} className="form-control find-user" placeholder="Usuário Github"
                            onChange={handleOnChange} />
                    </div>
                </div>
                <Button text="Encontrar" onClick={handleOnClick} />
            </div>
            <div className="loader-content">
                {
                    isLoading ? <InfoLoader /> : profile && <Profile profile={profile} />
                }
            </div>
        </>

    );
};

export default Search;