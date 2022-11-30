const Card = (props) =>{
    return (
        <a className="hover:scale-110 inline-block duration-500 bg-cor-texto rounded-[10px] text-center text-cor-preto md:h-40 h-[120px] w-[120px] md:w-44 md:mx-10 md:my-2 mx-[8px] my-[8px] shadow-shadow" href="#">
            <div className="text-cor-principal md:text-[50px] text-[40px] mt-5"><i class={props.icon}></i></div>
            <h3 class="md:mt-1 text-[15px] md:text-[18px]"><b>{props.text}</b></h3>
        </a>
    )
}

export default Card;