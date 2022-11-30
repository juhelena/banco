import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (<>
        <div className="h-1/2 bg-cor-footer w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">Banco<span className="text-cor-principal"> Ruby</span></p>
						<div className="flex gap-6 pb-5">
                            <i className="fa-brands fa-instagram text-2xl cursor-pointer text-gray-800 hover:text-cor-principal"></i>
                            <i className="fa-brands fa-linkedin-in text-2xl cursor-pointer text-gray-800 hover:text-cor-principal"></i>
                            <i className="fa-brands fa-twitter text-2xl cursor-pointer text-gray-800 hover:text-cor-principal"></i>
                            <i className="fa-brands fa-youtube text-2xl cursor-pointer text-gray-800 hover:text-cor-principal"></i>
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Produtos</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Conta digital</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Cartão de crédito</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Insvestimentos</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Ruby vermelhinho</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Empresa</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Sobre nós</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Carreiras</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Atendimento</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Produtos</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Serviços</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Suporte</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Contato</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Blog</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Comunidade</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-cor-principal cursor-pointer">Fornecedores</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col bg-cor-footer justify-center items-center text-center p-5">
				<h1 className="text-gray-800 font-semibold">©Copyright - Todos os direitos reservados com S.A. CNPJ 21.380.200/0000-14</h1>
			</div>
        </>);
    }
}
                
export default Footer;