import React, { useState } from 'react';
import img from '../imagens/cadastro.jpg';
import { useNavigate } from 'react-router-dom';

const Registro = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

async function signUp(){

    let item={email, senha, funcao: "cadastro"}
    console.warn(item)
    
    console.log(JSON.stringify(item))
    
    let result = await fetch("https://projeto-banco.azurewebsites.net/usuarios/",{
        method: 'POST',
        body: JSON.stringify(item),
        headers:{
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    result = await result.json()
    localStorage.setItem("user", JSON.stringify(result))
    
    navigate("/cadastro")
}

    return(
    <>
    <div className="flex bg-cor-fundo font-fonte h-screen">
        <img className="hidden md:block h-screen" src={img}/>
        <div className="ml-[11%] md:mt-[10%] mt-[25%]">
            <form className="md:w-[500px] w-[300px]">
                <h1 className="titulo-cad md:text-[2rem] text-[1.4rem] text-cor-preto text-center">Crie uma conta</h1>
                <div className="box my-[65px] md:my-[100px] relative grid">
                    <div className="icon text-cor-icone flex items-center justify-center">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div>
                        <h5 className="text-[15px]">Email</h5>
                        <input className="input-box absolute top-0 left-0 w-full text-[1rem]" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required="required" type="email"/>
                    </div>
                </div>
                <div className="box my-[65px] md:my-[100px] md:mx-0 relative grid">
                    <div className="icon text-cor-icone flex items-center justify-center">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <div>
                        <h5 className="text-[15px]">Senha</h5>
                        <input className="input-box absolute top-0 left-0 w-full text-[1rem]" name="senha" id="senha" value={senha} onChange={(event) => setSenha(event.target.value)}  required="required" type="password"/>
                    </div>
                </div>
                <a href="/login" className="hover:text-cor-principal text-[15px] text-cor-icone">Já tem uma conta?</a>
                <input id="cadastrar" onClick={signUp} className="md:my-[25px] md:mx-[150px] duration-500 hover:scale-105 mt-[40px] md:w-[250px] w-full h-[50px] text-center rounded-[25px] bg-cor-principal text-cor-texto text-[1.2rem]" value="Enviar"/>
            </form>
        </div>  
    </div>
        </>
    )
}

export default Registro;