import '../../styles/index.css';
import '../../styles/pages/style.module.css'

export function TotalMoney({teamTotalBuget}) {
    return(
        <div className='DivTotalMoney'>
            <div className='containerValor'>
                <h3> Valor total: </h3>
                <h3 className='ValorTotal'> R$: {teamTotalBuget},00 </h3>
            </div>
            <p className='TextValor'> O valor se refere ao saldo </p>
        </div>
    );
};
