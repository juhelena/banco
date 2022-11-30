import React, { Component } from 'react';
import app from '../imagens/phone.png'

class Conta extends Component {
    state = {  } 
    render() { 
        return (<>
            <div id="app" className="bg-cor-fundo flex flex-col justify-center md:h-screen h-auto">
                <div className="md:flex lg:flex-row flex-col ml-[15px] md:ml-[2rem] mt-[80px]">
                    <div className="md:ml-[350px] ml-8 font-fonte">
                        <p className="uppercase text-cor-principal md:text-[18px] font-bold">Conta Digital</p>
                        <h1 className="md:text-[39px] text-[25px] text-cor-preto font-semibold">Baixe o App.</h1>
                        <p className="text-sm md:text-[17px] mt-[12px] md:w-[550px]  w-[280px]">O Ruby é uma plataforma 100% digital, gratuita
                        e sem complicações que te ajuda a conquistar seus objetivos direto pelo app.</p>
                        <div class="md:flex mt-[40px]">
                            <a className="mx-[8px] my-[8px] h-[55px] w-[160px] bg-cor-texto flex items-center justify-center rounded-[10px] shadow-shadow" href="#">
                            <i className="text-[40px] text-cor-principal fa-brands fa-apple mx-2"></i> Apple Store</a>
                            <a className="mx-[8px] my-[8px] h-[55px] w-[160px] bg-cor-texto flex items-center justify-center rounded-[10px] shadow-shadow" href="#">
                            <i className="text-[34px] fa-brands text-cor-principal fa-google-play mx-2"></i>Google Play</a>
                        </div>
                        <div className="mt-[40px]">
                            <a className="text-cor-principal md:text-[18px] text-[14px] font-medium flex btn" href="">Baixar agora<i className="fa-solid fa-arrow-right text-base text-cor-principal ml-[5px]"></i></a>      
                        </div>
                    </div>
                    <div className='flex justify-center mb-[80px]'>
                        <img className="w-[10rem] md:w-[15vw] md:mt-[20px] mt-[50px] md:ml-[150px]" src={app}/>
                    </div>
                </div>
            </div>
        </>);
    }
}
        
export default Conta;