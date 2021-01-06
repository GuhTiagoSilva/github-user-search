import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../core/components/Button';
import { GitHubProfile } from '../../../core/types/GitHubProfile';
import './styles.scss';

type ProfileProps = {
    profile: GitHubProfile
};

const Profile = ({ profile }: ProfileProps) => {
    return (

        <div className="profile-container">

            <div className="profile-image">
                <img src={profile.avatar_url} className="profile-image" alt="" />
                <a href={`https://github.com/${profile.login}`} target='blank'>
                    <Button text="Ver perfil" />
                </a>



            </div>

            <div className="profile-repository-informations">
                <ul className="repositories">
                    <li>{`Repositórios públicos: ${profile.public_repos}`} </li>
                    <li> {`Seguidores: ${profile.followers}`} </li>
                    <li>  {`Seguindo: ${profile.following}`}  </li>
                </ul>

                <div className="profile-information-container">
                    <h3 className="profile-information-title">Informações</h3>
                    <input readOnly type="text" className="form-control profile-input" value={`Empresa: ${profile.company}  `}></input>
                    <input readOnly type="text" className="form-control profile-input" value={`Website/Blog: ${profile.blog} `} />
                    <input readOnly type="text" className="form-control profile-input" value={`Localidade: ${profile.location} `} />
                    <input readOnly type="text" className="form-control profile-input" value={`Membro desde: ${profile.created_at} `} />
                </div>

            </div>
        </div>

    );
}

export default Profile;