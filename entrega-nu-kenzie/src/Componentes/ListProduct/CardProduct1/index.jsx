export const CardTransiction = ({product, removeProductFromTransactionList}) => {

    return (
        <li className={product.TransitionCategory === 'Entrada' ? 'cardTransiction1' : 'cardTransiction2'}>
            <div className='DivEsquerda'>
                <span className='TextSalario'> {product.TransactionName} </span>
                <span> {product.TransitionCategory} </span>
            </div>
            <div className='DivDireita'>
                <span> R$: {product.TransitionPeso.toLocaleString()},00 </span>
                <button className='ButtonExcluir' onClick={() => removeProductFromTransactionList(product.id)}> Excluir </button>
            </div>
        </li>
    );
};

