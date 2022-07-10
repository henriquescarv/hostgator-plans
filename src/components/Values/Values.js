import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './Values.css';
import icon_p from '../../images/plan_p.svg';
import icon_m from '../../images/plan_m.svg';
import icon_turbo from '../../images/plan_turbo.svg';
import icon_info from '../../images/info.svg';

export default function Values() {
    const [plan_cycle, setPlan_cycle] = useState();

    const [listPlans, setListPlans] = useState();

    useEffect(() => {
        api.get('')
        .then(response => {setListPlans(response.data.shared.products)})
    }, []);

    const [planTurbo, setPlanTurbo] = useState();
    const [planM, setPlanM] = useState();
    const [planP, setPlanP] = useState();

    useEffect(() => {
        if (listPlans) {
            setPlanTurbo(getPlanData(335, plan_cycle))
            setPlanM(getPlanData(6, plan_cycle))
            setPlanP(getPlanData(5, plan_cycle))
        }
        
    }, [listPlans, plan_cycle])

    function getPlanData(plan_id, cycle) {
        let list = listPlans

        let cycleOf = 'triennially'

        let id = plan_id

        let planType = list.product_5
        let planCycle = planType.cycle.triennially
        let equivalentPrice = 'equivalente a'

        if (id === 5) {
            planType = list.product_5
        } else if (id === 6) {
            planType = list.product_6
        } else if (id === 335) {
            planType = list.product_335
        }

        if (cycle === 'triennially') {
            planCycle = planType.cycle.triennially
            cycleOf = 'triennially'
        } else if (cycle === 'annually') {
            planCycle = planType.cycle.annually
            cycleOf = 'annually'
        } else if (cycle === 'monthly') {
            planCycle = planType.cycle.monthly
            cycleOf = 'monthly'
            equivalentPrice = '⠀'
        }

        var plan_name = planType.name
        var plan_original_price = (parseInt(planCycle.priceOrder)).toFixed(2)
        var plan_discount = (parseInt(plan_original_price) * 0.4).toFixed(2)
        var plan_price = (plan_original_price - plan_discount).toFixed(2)
        var plan_monthly_price = (plan_price / planCycle.months).toFixed(2)

        const plan = {
            name: plan_name,
            original_price: plan_original_price.toString().replace('.', ','),
            discount: plan_discount.toString().replace('.', ','),
            price: plan_price.toString().replace('.', ','),
            monthly_price: plan_monthly_price.toString().replace('.', ','),
            equivalent: equivalentPrice,
            this_cycle: cycleOf,
            plan_id: id
        }
        return plan
    }

    return (
        <div className='values_container'>
            <div className='text_box'>
                <p>Quero pagar a cada:</p>
            </div>
            <div className='cycle'>
                <div className='radio_container'>
                    <div className='radio_box'>
                        <input className='radio_input' type='radio' value='triennially' name='myRadio' id='triennially' defaultChecked onChange={e=>setPlan_cycle(e.target.value)}/>
                        <label className='radio_label' for='triennially'>
                            <div className='circle'/>
                            3 anos
                        </label>
                    </div>
                    <div className='radio_box'>
                        <input className='radio_input' type='radio' value='annually' name='myRadio' id='annually' onChange={e=>setPlan_cycle(e.target.value)}/>
                        <label className='radio_label' for='annually'>
                            <div className='circle'/>
                            1 ano
                        </label>
                    </div>
                    <div className='radio_box'>
                        <input className='radio_input' type='radio' value='monthly' name='myRadio' id='monthly' onChange={e=>setPlan_cycle(e.target.value)}/>
                        <label className='radio_label' for='monthly'>
                            <div className='circle'/>
                            1 mês
                        </label>
                    </div>
                </div>
            </div>
            <div className='item_row'>
                <div className='plan'>
                    <div className='title_plan'>
                        <div className='image'>
                            <img src={`${icon_p}`} alt='P'/>
                        </div>
                        {console.log(listPlans)}
                        <h1>{planP?.name}</h1>
                        
                    </div>
                    <div className='prices_plan'>
                        <div className='discount'>
                            <div className='align_text_box'>
                                <p className='traced'>R$ {planP?.original_price}</p>
                                <p className='bold'>R$ {planP?.price}</p>
                            </div>
                            <p className='equivalent'>{planP?.equivalent}</p>
                        </div>
                        <div className='cycle_price'>
                            <p>R$</p>
                            <h1>{planP?.monthly_price}</h1>
                            <p>/p mês*</p>
                        </div>
                        <div className='button_container'>
                            <button className='button_blue' onClick={() => window.location.href = `/?a=add&pid=${planP?.plan_id}&billingcycle=${planP?.this_cycle}&promocode=PROMOHG40`}>
                                <h2>Contrate Agora</h2>
                            </button>
                        </div>
                        <div className='free_domain'>
                            <p className='bold'>1 ano de Domínio Grátis</p>
                            <img src={`${icon_info}`} alt='info'/>
                        </div>
                        <div className='spare'>
                            <p>economize R$ {planP?.discount}</p>
                            <div className='green_box'>
                                <h3>40% OFF</h3>
                            </div>
                        </div>
                    </div>
                    <div className='infos_plan'>
                        <div className='underlined'>
                            <div className='list_item'>
                                <p>Sites ilimitados</p>
                            </div>
                        </div>
                        <div className='list_item'>
                            <p className='bold'>100 GB</p>
                            <p>de Armazenamento</p>
                        </div>
                        <div className='underlined'>
                            <div className='list_item'>
                                <p>Contas de E-mail</p>
                                <p className='bold'>Ilimitadas</p>
                            </div>
                        </div>
                        <div className='list_item'>
                            <p>Criador de sites</p>
                            <p className='free_underlined'>Grátis</p>
                        </div>
                        <div className='list_item'>
                            <p>Certificado SSL</p>
                            <p className='bold'>Grátis</p>
                            <p>(https)</p>
                        </div>
                    </div>
                </div>
                <div className='plan_m_container'>
                    <div className='orange_detail'/>
                    <div className='plan_m'>
                        <div className='title_plan'>
                            <div className='image'>
                                <img src={`${icon_m}`} alt='M'/>
                            </div>
                            <h1>{planM?.name}</h1>
                        </div>
                        <div className='prices_plan'>
                            <div className='discount'>
                                <div className='align_text_box'>
                                    <p className='traced'>R$ {planM?.original_price}</p>
                                    <p className='bold'>R$ {planM?.price}</p>
                                </div>
                                <p className='equivalent'>{planM?.equivalent}</p>
                            </div>
                            <div className='cycle_price'>
                                <p>R$</p>
                                <h1>{planM?.monthly_price}</h1>
                                <p>/p mês*</p>
                            </div>
                            <div className='button_container'>
                                <button id='button' className='button_orange' onClick={() => window.location.href = `/?a=add&pid=${planM?.plan_id}&billingcycle=${planM?.this_cycle}&promocode=PROMOHG40`}>
                                    <h2>Contrate Agora</h2>
                                </button>
                            </div>
                            <div className='free_domain'>
                                <p className='bold'>1 ano de Domínio Grátis</p>
                                <img src={`${icon_info}`} alt='info'/>
                            </div>
                            <div className='spare'>
                                <p>economize R$ {planM?.discount}</p>
                                <div className='green_box'>
                                    <h3>40% OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div className='infos_plan'>
                            <div className='underlined'>
                                <div className='list_item'>
                                    <p>Sites ilimitados</p>
                                </div>
                            </div>
                            <div className='list_item'>
                                <p className='bold'>100 GB</p>
                                <p>de Armazenamento</p>
                            </div>
                            <div className='underlined'>
                                <div className='list_item'>
                                    <p>Contas de E-mail</p>
                                    <p className='bold'>Ilimitadas</p>
                                </div>
                            </div>
                            <div className='list_item'>
                                <p>Criador de sites</p>
                                <p className='free_underlined'>Grátis</p>
                            </div>
                            <div className='list_item'>
                                <p>Certificado SSL</p>
                                <p className='bold'>Grátis</p>
                                <p>(https)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='plan'>
                    <div className='title_plan'>
                        <div className='image'>
                            <img src={`${icon_turbo}`} alt='M'/>
                        </div>
                        <h1>{planTurbo?.name}</h1>
                    </div>
                    <div className='prices_plan'>
                        <div className='discount'>
                            <div className='align_text_box'>
                                <p className='traced'>R$ {planTurbo?.original_price}</p>
                                <p className='bold'>R$ {planTurbo?.price}</p>
                            </div>
                            <p className='equivalent'>{planTurbo?.equivalent}</p>
                        </div>
                        <div className='cycle_price'>
                            <p>R$</p>
                            <h1>{planTurbo?.monthly_price}</h1>
                            <p>/p mês*</p>
                        </div>
                        <div className='button_container'>
                            <button className='button_blue' onClick={() => window.location.href = `/?a=add&pid=${planTurbo?.plan_id}&billingcycle=${planTurbo?.this_cycle}&promocode=PROMOHG40`}>
                                <h2>Contrate Agora</h2>
                            </button>
                        </div>
                        <div className='free_domain'>
                            <p className='bold'>1 ano de Domínio Grátis</p>
                            <img src={`${icon_info}`} alt='info'/>
                        </div>
                        <div className='spare'>
                            <p>economize R$ {planTurbo?.discount}</p>
                            <div className='green_box'>
                                <h3>40% OFF</h3>
                            </div>
                        </div>
                    </div>
                    <div className='infos_plan'>
                        <div className='underlined'>
                            <div className='list_item'>
                                <p>Sites ilimitados</p>
                            </div>
                        </div>
                        <div className='list_item'>
                            <p className='bold'>100 GB</p>
                            <p>de Armazenamento</p>
                        </div>
                        <div className='underlined'>
                            <div className='list_item'>
                                <p>Contas de E-mail</p>
                                <p className='bold'>Ilimitadas</p>
                            </div>
                        </div>
                        <div className='list_item'>
                            <p>Criador de sites</p>
                            <p className='free_underlined'>Grátis</p>
                        </div>
                        <div className='list_item'>
                            <p>Certificado SSL</p>
                            <p className='bold'>Grátis</p>
                            <p>(https)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='conditions_container'>
                <div className='conditions'>
                    <a href='http://localhost:3000/'>*Confira as condições da promoção</a>
                </div>
            </div>
        </div>
    );
}