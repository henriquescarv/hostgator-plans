//info

import React from "react";
import './Infos.css'
import wave from '../../images/wave.svg'
import icon_check from '../../images/icon-check.svg'
import image_1 from '../../images/image_1.svg'
import image_2 from '../../images/image_2.svg'
import arrow from '../../images/arrow.svg'
// import images

export default function Infos() {
    return (
        <div className="infos_container">
            <div>
                <img className="wave" src={`${wave}`} alt='Wave' draggable='false'/>
                <div className="arrow_container">
                    <img className="arrow" src={`${arrow}`} alt="arrow" draggable='false'/>
                </div>
                <div className="objects_container">
                    <img src={`${image_1}`} alt="coffee" className="image" draggable='false'/>
                    <div className="informations">
                        <div className="container">
                            <h2>Hospedagem de Sites</h2>
                            <div className="title">
                                <h1>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>
                            </div>
                            <div className="breadcrumbs">
                                <div className="texts">
                                    <div className="major_text">
                                        <div className="breadcrumb">
                                            <img src={`${icon_check}`} alt=">" className="check" draggable='false'/>
                                            <p>99,9% de disponibilidade: seu site sempre no ar </p>
                                        </div>
                                    </div>
                                    <div className="twins_text">
                                        <div className="breadcrumb">
                                            <img src={`${icon_check}`} alt=">" className="check" draggable='false'/>
                                            <p>Suporte 24h, todos os dias </p>
                                        </div>
                                        <div className="breadcrumb">
                                            <img src={`${icon_check}`} alt=">" className="check" draggable='false'/>
                                            <p>Painel de Controle cPanel </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={`${image_2}`} alt="work" className="image" draggable='false'/>
                </div>
            </div>
        </div>
    );
}