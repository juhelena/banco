import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Cliente= () => {

    const [nome, setNome] = useState([]);
    
    useEffect (() =>  {
        const dados = JSON.parse(sessionStorage.getItem('user'))
        if (dados) {
            setNome(dados.user.Nome)
        }
    }, []);
    
    const [valor, setValor] = useState("");
    const [check, setCheck] = useState("");
    const [saldo, setSaldo] = useState(4000);
    const [poupanca, setPoupanca] = useState(0); 
    const [total, setTotal] = useState(0); 

    const handleSave = () => {
        if (!valor) {
            alert("Informe o valor!");
            return;
        } 
        else if (valor < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }
    };

    return (<>
    <div className="h-screen w-full font-fonte bg-cor-cinza">
        <div className="flex bg-cor-principal justify-between w-full md:p-4 pt-[25px] items-center">
            <ul>
                <li><a className="text-cor-texto text-lg flex items-center justify-center text-[17px] md:text-base md:px-5 w-[250px] h-[32px] md:py-1">Olá, {nome}!</a></li>   
            </ul>
            <ul className="md:block hidden">
                <li><a className="text-cor-texto text-lg inline-block duration-500 flex items-center justify-center text-[17px] md:text-base md:px-5 w-[105px] h-[32px] md:py-1 
                hover:scale-105" href="/login">Sair<i className="bx bx-log-in text-[17px] md:text-[20px] text-cor-texto"></i></a></li>
            </ul>
            <ul className="md:hidden block">
                <li><a className="inline-block duration-500 hover:scale-105"><i className="bx bx-log-in mr-[23px] mt-[5px] text-[25px] text-cor-texto"></i></a></li>
            </ul>
        </div>
        <div className="flex-wrap mt-[10px] md:mt-14 flex justify-center">
            <a className="inline-block duration-500 hover:scale-105 rounded-[5px] md:my-2 mx-[8px] my-[8px] h-[100px] w-[250px] bg-cor-texto">
                <div className="flex items-center pt-[18px] px-7">
                    <p className="text-cor-preto">Meu saldo</p>
                    <i class="ml-[80px] fa-solid fa-eye text-cor-principal"></i>
                </div>
                <h1 className="text-center font-semibold pt-[20px] text-[20px]">R$ {saldo},00</h1>
            </a>
            <a className="inline-block duration-500 hover:scale-105 rounded-[5px] md:my-2 mx-[8px] my-[8px] h-[100px] w-[250px] bg-cor-texto">
                <div className="flex items-center pt-[18px] px-7">
                    <p className="text-cor-preto">Poupança</p>
                    <i class="ml-[90px] fa-solid fa-sack-dollar text-cor-principal"></i>
                </div>
                <h1 className="text-center font-semibold pt-[20px] text-[20px]">R$ {poupanca},00</h1>
            </a>
            <a className="inline-block duration-500 hover:scale-105 rounded-[5px] md:my-2 mx-[8px] my-[8px] h-[100px] w-[250px] bg-cor-texto">
                <div className="flex items-center pt-[18px] px-7">
                    <p className="text-cor-preto">Saída</p>
                    <i class="ml-[120px] fa-solid fa-money-bill-transfer text-cor-principal"></i>
                </div>
                <h1 className="text-center font-semibold pt-[20px] text-[20px]">R$ {total},00</h1>
            </a>
        </div>
        <div className="justify-center flex md:items-center md:mt-[30px] mt-[20px]">
            <div className="bg-cor-texto md:w-[780px] w-[300px] md:h-[100px] h-[180px] rounded-[5px] md:flex shadow-shadow-form px-[15px] py-0 gap-[10px]">
                <div className="flex flex-col mt-[10px]">
                    <label>Valor</label>
                    <input className="outline-none rounder-[5px] px-[5px] py-[10px] text-[15px] border-[1px]" value={valor} type="number" onChange={(e) => setValor(e.target.value)}></input>
                </div>
                <div className="flex items-center">
                    <input className="ml-[20px] mr-[5px] accent-cor-principal mt-0" type="radio" defaultChecked id="entrar" onChange={() => setCheck(!check)}></input>
                    <label htmlFor="entrar">Entrada</label>
                    <input className="ml-[20px] mr-[5px] accent-cor-principal mt-0" type="radio" id="sair" onChange={() => setCheck(!check)}></input>
                    <label htmlFor="sair">Saída</label>
                </div>
                <a className="inline-block duration-500 hover:scale-105 px-[12px] justify-center flex md:ml-[230px] mt-[30px] h-[40px] py-[8px] border-none rounded-[5px] text-cor-texto bg-cor-principal" onClick={handleSave}>Adicionar</a>
            </div>
        </div>
    </div>
    </>);
}
 
export default Cliente;