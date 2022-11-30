import React, { Component } from 'react';
import Card from '../components/Card'

class Servicos extends Component {
    state = {  } 
    render() { 
        return (<>
        <section id="servicos" className="font-fonte mt-[70px] md:mt-[200px]">
            <div className='flex flex-col items-center text-center justify-center '>
                <h1 className="md:text-[37px] text-3xl text-cor-preto font-semibold">Nossos Serviços</h1>
                <p className="md:mt-[18px] mt-[12px] md:text-[18px] text-sm md:w-[600px] w-[250px]">Saiba mais sobre as soluções e os serviços que agilizam sua vida.</p>
            </div>
            <div className="flex-wrap mt-10 md:mt-14 flex justify-center">
                <Card text="Cartão" icon="bx bxs-credit-card"/>
                <Card text="Pagamentos" icon="bx bx-coin-stack"/>
                <Card text="Poupança" icon="fa-solid fa-piggy-bank"/>
                <Card text="Conta Digital" icon="fa-solid fa-mobile-screen-button"/>
                <Card text="Investir" icon="fa-solid fa-money-bill-trend-up"/>
            </div>
            <div className="md:mb-[200px] mb-[100px]"></div>
        </section>
        </>);
    }
}

export default Servicos;