import React from 'react';
import krs from '../assets/krs.png'
import rejestr from '../assets/logoRejestrIo.svg'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://ekrs.ms.gov.pl/web/wyszukiwarka-krs/strona-glowna/index.html">
                        <img src={krs} alt="LogoKRS" width="200" height="50" className="d-inline-block align-text-top"/>
                    </a>
                    <a className="navbar-brand" href="https://rejestr.io/"> <img src={rejestr} alt="LogoRejestr" width="100" height="50" className="d-inline-block align-text-top"/></a>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;