import React from 'react';
import Button from '../../../core/components/Button';
import './styles.scss';

const Profile = () => {
    return (
        <>
            <div className="profile-container container col-9">

                <div className="profile-image col-3">
                    <img src="https://github.githubassets.com/images/modules/about/leadership-nat.jpg" className="profile-image" alt=""/>
                    <Button text="Ver perfil"/>
                </div>
                
                <div className="profile-repository-informations col-6">
                    <ul className="repositories">
                        <li>Repositórios públicos: 62</li>
                        <li>Seguidores: 127</li>
                        <li>Seguindo: 416</li>
                    </ul>

                    <div className="profile-information-container">
                        <h3 className="profile-information-title">Informações</h3>
                        <input type="text" className="form-control profile-input" />
                        <input type="text" className="form-control profile-input" />
                        <input type="text" className="form-control profile-input" />
                        <input type="text" className="form-control profile-input" />
                    </div>

                </div>



            </div>

        </>
    );
}

export default Profile;