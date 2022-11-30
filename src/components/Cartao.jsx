import React, { Component } from 'react';
import cart from '../imagens/cartao.png'

class Cartao extends Component {
    state = {  } 
    render() { 
        return (<>
            <div id="cartao" className="md:mt-[100px] bg-cor-fundo w-full flex flex-col justify-center md:h-screen h-auto">
                <div className="md:flex flex-col lg:flex-row ">
                    <div className="md:ml-[20rem] md:mt-[50px] mt-[100px] ml-[50px] font-fonte">
                            <p className="uppercase text-cor-principal md:text-[18px] font-bold">Seu vermelinho</p>
                            <h1 className="md:text-[39px] text-[25px] text-cor-preto font-semibold">Cartão de Crédito.</h1>
                            <p className="text-sm md:text-[17px] mt-[12px] text-cor-texto-cinza md:w-[560px] w-[280px]">Utilize com facilidade e segurança em qualquer lugar do mundo.</p>
                        <div className="flex md:mt-[60px] mt-[40px]">
                            <div className="rounded-full text-center md:h-[55px] h-[50px] md:w-[60px] w-[53px] bg-cor-clara">
                                <div><p className="text-cor-principal md:mt-[3px] mt-[5px] md:text-[34px] font-semibold text-[27px]">1</p></div>
                            </div>
                            <div className="flex-1 flex flex-col ml-3 md:ml-5">
                                <p className="text-[18px] font-semibold text-cor-preto mb-1">Cartão Virtual</p>
                                <p className="md:text-[16px] text-[12px] text-cor-texto-cinza w-[230px] md:w-[500px]">Retome o controle do seu dinheiro. Seu cartão Virtual no App para suas compras online.</p>
                            </div>
                        </div> 
                        <div className="flex md:mt-[50px] mt-[35px]">
                            <div className="rounded-full text-center md:h-[55px] h-[50px] md:w-[60px] w-[53px] bg-cor-clara">
                                <div><p className="text-cor-principal md:mt-[3px] mt-[5px] md:text-[34px] font-semibold text-[27px]">2</p></div>
                            </div>
                            <div className="flex-1 flex flex-col ml-3 md:ml-5">
                                <p className="text-[18px] font-semibold text-cor-preto mb-1">Moderno</p>
                                <p className="md:text-[16px] text-[12px] text-cor-texto-cinza w-[230px] md:w-[500px]">Não é um cartão. É uma revolução. Tudo para manter o controle em suas mãos!</p>
                            </div>
                        </div>
                        <div className="flex md:mt-[50px] mt-[35px]">
                            <div className="rounded-full text-center md:h-[55px] h-[50px] md:w-[60px] w-[53px] bg-cor-clara">
                                <div><p className="text-cor-principal md:mt-[3px] mt-[5px] md:text-[34px] font-semibold text-[27px]">3</p></div>
                            </div>
                            <div className="flex-1 flex flex-col ml-3 md:ml-5">
                                <p className="text-[18px] font-semibold text-cor-preto mb-1">100% Grátis</p>
                                <p className="md:text-[16px] text-[12px] text-cor-texto-cinza w-[230px] md:w-[500px]">Sem filas, sem burocracias e sem taxas. Pagamentos instantâneos e gratuitos, seja Ruby!</p>
                            </div>
                        </div> 
                        <div className="md:mt-[60px] mt-[40px]">
                            <a className="text-cor-principal md:text-[18px] text-[14px] font-medium flex btn" href="">Peça já o seu<i class="fa-solid fa-arrow-right text-base text-cor-principal ml-[5px]"></i></a>      
                        </div>     
                    </div>
                    <div>
                        <img className="md:h-[40rem] md:ml-[10px] animate-img-animation" src={cart}/>
                    </div>
                </div>   
        </div>
        </>);
    }
}
        
export default Cartao;