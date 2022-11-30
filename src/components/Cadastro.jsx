import React, { useState, Component } from 'react';
import img from '../imagens/cadastro.jpg'
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [datanasc, setDatanasc] = useState('');
    const navigate = useNavigate();

    const formatarData = (data) => {
        const [dia, mes, ano] = data.split('/');

        return `${ano}-${mes}-${dia}`
    }

    async function signUp(){

        var user = JSON.parse(localStorage.getItem("user"))
        console.log(user)
        var id = user.id

        let item={nome: nome, cpf: cpf, celular: celular, datanasc: formatarData(datanasc), usuario: id, funcao: "cadastro"}
        console.warn(item)
    
        navigate("/login")
    
        console.log(JSON.stringify(item))
        
        let result = await fetch("https://projeto-banco.azurewebsites.net/clientes/",{
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("client", JSON.stringify(result))
    }
        return (<>
        <div className="flex bg-cor-fundo font-fonte h-screen">
            <img className="hidden md:block h-screen" src={img}/>
            <div className="ml-[11%] md:mt-[6rem] mt-[14%]">
                <form className="md:w-[500px] w-[300px]">
                    <h1 className="titulo-cad md:text-[2rem] text-[1.6rem] text-cor-preto text-center">Cadastro</h1>
                    <div className="box my-[50px] md:my-[70px] relative grid">
                        <div className="icon text-cor-icone flex items-center justify-center">
                            <i className="far fa-user icon"></i>
                        </div>
                        <div>
                            <h5 className="text-[15px]">Nome completo</h5>
                            <input className="input-box absolute top-0 left-0 w-full text-[1rem]" id="nome" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} required="required" type="text"/>
                        </div>
                    </div>
                    <div className="box my-[50px] md:my-[70px] md:mx-0 relative grid">
                        <div className="icon text-cor-icone flex items-center justify-center">
                            <i className="fa-regular fa-address-card"></i>
                        </div>
                        <div>
                            <h5 className="text-[15px]">CPF</h5>
                            <input className="input-box absolute top-0 left-0 w-full text-[1rem]" id="cpf" name="cpf" value={cpf} onChange={(event) => setCpf(event.target.value)} required="required" type="text" maxLength={11}/>
                        </div>
                    </div>
                    <div className="box my-[50px] md:my-[70px] md:mx-0 relative grid">
                        <div className="icon text-cor-icone flex items-center justify-center">
                            <i className="fa-solid fa-phone-flip"></i>
                        </div>
                        <div>
                            <h5 className="text-[15px]">Celular</h5>
                            <input className="input-box absolute top-0 left-0 w-full text-[1rem]" id="celular" name="celular" value={celular} onChange={(event) => setCelular(event.target.value)} maxLength={11} required="required" type="text"/>
                        </div>
                    </div>
                    <div className="box my-[50px] md:my-[70px] md:mx-0 relative grid"> 
                        <div className="icon text-cor-icone flex items-center justify-center">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                        <div>
                            <h5 className="text-[15px]">Data de Nascimento</h5>
                            <input className="input-box absolute top-0 left-0 w-full text-[1rem]" id="datanasc" name="datanasc" required="required" value={datanasc} onChange={(event) => setDatanasc(event.target.value)} type="text"/>
                        </div>
                    </div>
                    <a href="/login" className="hover:text-cor-principal text-[15px] text-cor-icone">Já tem uma conta?</a>
                    <input onClick={signUp} className="md:my-[25px] md:mx-[150px] duration-500 hover:scale-105 mt-[20px] md:w-[250px] w-full h-[50px] text-center rounded-[25px] bg-cor-principal text-cor-texto text-[1.2rem]" value="Enviar"/>
                </form>
            </div>  
        </div>
        </>
    )
}
        
export default Cadastro;