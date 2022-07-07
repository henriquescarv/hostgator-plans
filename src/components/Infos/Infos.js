import React from "react";
import './Infos.css'
import wave from '../../images/wave.svg'
// import images

export default function Infos() {
    return (
        <body>
            <div className="curve">
                <img className="wave" src={`${wave}`} alt='Wave'></img>
            </div>
            <h2>Hospedagem de Sites</h2>
            <h1>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>
            <p>99,9% de disponibilidade: seu site sempre no ar</p>
            <p>Suporte 24h, todos os dias </p>
            <p>Painel de Controle cPanel</p>
        </body>
    );
}