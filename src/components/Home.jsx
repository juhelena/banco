import React, { useState } from 'react';
import foto from '../imagens/home.png'
import logo from '../imagens/logo.png'

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="h-screen w-full font-fonte bg-cor-fundo top-0 left-0 bg-cover bg-center">
            <div className={`md:flex ${open? ' md:bg-cor-fundo bg-white relative z-10': '' } justify-between w-full p-8 items-center`}>
                <img className="lg:h-[45px] h-[32px]" src={logo}/>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-9 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close': 'menu'}></ion-icon>
                </div>
                <div>
                    <ul className={`z-10 md:pb-0 bg-white md:bg-cor-fundo md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 z-[-1] pb-[229px] md:static absolute md:flex md:list-none md:gap-16 md:text-cor-preto md:text-lg ${open ? 'mt-0': 'mt-[-490px]'} md:mt-0`}>
                        <li className="md:my-0 my-5"><a className="md:inline-block md:duration-500 md:hover:text-cor-principal md:hover:scale-105" href="#servicos">Serviços</a></li>
                        <li className="md:my-0 my-5"><a className="md:inline-block md:duration-500 md:hover:text-cor-principal md:hover:scale-105" href="#cartao">Para você</a></li>
                        <li className="md:my-0 my-5"><a className="md:inline-block md:duration-500 md:hover:text-cor-principal md:hover:scale-105" href="#app">Conta Digital</a></li>
                        <li className="md:my-0 my-5"><a className="md:inline-block md:duration-500 md:hover:text-cor-principal md:hover:scale-105" href="#footer">Contato</a></li>                  
                    </ul>
                </div>
                <ul className={`md:block md:inset-0 relative z-50 ${open ? 'mt-[200px]': 'mt-[-490px]'} md:mt-0`}>
                    <li><a className="text-cor-texto text-lg inline-block duration-500 flex items-center justify-center text-[17px] md:text-base md:px-5 w-[105px] h-[32px] md:py-1 bg-cor-principal rounded-md 
                    hover:scale-105" href="/login">Login<i className="bx bx-log-in text-[17px] md:text-[20px] text-cor-texto"></i></a></li>
                </ul>
            </div>
            <div className='flex md:flex-row flex-col justify-center'>
                <div className="mt-[30px] z-10 lg:mt-[20px] lg:pt-64 text-cor-preto md:ml-[20px] ml-[30px]">     
                    <p className="lg:text-[64px] text-[25px] md:w-[680px] w-[280px] font-medium mb-4">Ruby o banco digital que faz acontecer.</p>
                    <div className="flex">
                        <a className="text-cor-texto md:text-lg inline-block duration-500 text-base px-3 py-2 md:px-5 md:py-2 bg-cor-principal rounded-md 
                        hover:scale-105 md:mt-[10px]" href="/registro">Quero ser Ruby</a>
                    </div>
                </div> 
                <img className="md:h-[45vw] z-10 absolute md:sticky bottom-[0]" src={foto}/>
            </div>
        </div>
        </>
    )
}

export default Home;