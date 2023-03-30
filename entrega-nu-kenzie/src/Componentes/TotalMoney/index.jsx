import '../../styles/index.css';

export const TotalMoney = ({transactionList}) => {

    const total = transactionList.reduce((previousValue, currenteTransition) => {
        if(currenteTransition.TransitionCategory === "Entrada") {
            return previousValue + currenteTransition.TransitionPeso
        } else {
            return previousValue - currenteTransition.TransitionPeso
        }
    }, 0)

    return(
        <div className='DivTotalMoney'>
            <div className='containerValor'>
                <h3> Valor total: </h3>
                <h2 className='ValorTotal'>R$:{total.toLocaleString()}</h2>
            </div>
            <p className='TextValor'> O valor se refere ao saldo </p>
        </div>
    );
};

