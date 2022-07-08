import React from 'react'
import './Values.css'

export default function Values() {
    return (
        <div className='values_container'>
            <div className='cicle'>
                {/* <p>Quero pagar a cada:</p> */}
                <div className='radio_container'>
                    <div className='radio_box'>
                        <input className='radio_input' type='radio' value='3anos' name='myRadio' id='3'/>
                        <label className='radio_label' for='3'>
                            <div className='circle'/>
                            3 anos
                        </label>
                    </div>
                    <div className='radio_box'>
                        <input className='radio_input' type='radio' value='1anos' name='myRadio' id='1'/>
                        <label className='radio_label' for='1'>
                            <div className='circle'/>
                            1 ano
                        </label>
                    </div>
                    <div className='radio_box'>
                        <input className='radio_input' type='radio' value='1mes' name='myRadio' id='1mes'/>
                        <label className='radio_label' for='1mes'>
                            <div className='circle'/>
                            1 mês
                        </label>
                    </div>
                </div>
            </div>
            <div className='item_row'>
                <div className='plan'>
                    <a>Planos</a>
                </div>
            </div>
            
        </div>
    );
}