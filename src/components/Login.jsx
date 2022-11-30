import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/cliente')
        }
    })

    async function logar(){

        let item={email: email, senha: password, funcao: 'logar'}

        console.warn(item) 
        console.log(JSON.stringify(item))
        
        var result = await fetch("https://projeto-banco.azurewebsites.net/usuarios/",{
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
     
        .then(res => {
            res.json().then(vv => {
                if (vv.cliente){
                    sessionStorage.setItem('user', JSON.stringify({user:vv.cliente}))
                    navigate('/cliente')
                    return
                }
            })
        })
    }

    return (<>
    <div className="h-screen font-fonte md:bg-cor-cinza relative bg-center bg-cover w-full">
        <div className="w-full h-screen "></div>
        <div className="absolute rounded-[10px] w-[400px] top-[50%] left-[50%] bg-white translate-y-[-50%] translate-x-[-50%] md:shadow-shadow-form">
            <h1 className="text-center text-[30px] font-semibold text-cor-preto py-[20px] px-0 md:border-b-[1px]">Login</h1>
            <div className="box-border h-[380px] py-0 px-[40px] relative">
            <div className="txt_field border-b-2 mt-[50px] relative my-[40px] mx-0">
                <input className="w-[100%] pxy-0 px-[5px] h-[40px] text-[16px] border-0 outline-none" value={email} onChange={(event) => setEmail(event.target.value)} type="text" required></input>
                <span></span>
                <label className="absolute left-[5px] translate-y-[-50%] text-[16px] pointer-events-none transition duration-300">Email</label>
            </div>
            <div className="txt_field border-b-2 relative my-[30px] mx-0">
                <input className="w-[100%] py-0 px-[5px] h-[40px] text-[16px] border-0 outline-none" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                <span></span>
                <label className="absolute top-[50%] left-[5px] translate-y-[-50%] text-[16px] pointer-events-none transition duration-300">Senha</label>
            </div>
            <div className="pass">Esqueceu a senha?</div>
            <input onClick={logar} className="inline-block duration-500 hover:scale-105 text-center w-[100%] h-[50px] rounded-[25px] bg-cor-principal text-cor-texto text-[1.2rem]" value="Login"></input>
            <div className="text-cor-gray my-[30px] mx-0 text-center">
            Não é cadastrado? <a className="text-cor-principal" href="/registro">Entrar</a>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
        
export default Login;