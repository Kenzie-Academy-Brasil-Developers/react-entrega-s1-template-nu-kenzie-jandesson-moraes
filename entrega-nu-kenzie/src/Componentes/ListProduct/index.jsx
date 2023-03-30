import { CardTransiction } from './CardProduct1';
import '../../styles/index.css';

export const ListTransiction = ({transactionList, removeProductFromTransactionList}) => {

    return (
        <div className='containerFinance'>
            <h2> Resumo financeiro </h2>
            { transactionList.length > 0 ? (
                <ul>
                { transactionList.map((product) => {
                        return (
                            <CardTransiction 
                            key={product.id}
                            product={product}
                            removeProductFromTransactionList={removeProductFromTransactionList}
                            />
                            );
                        }
                        )}
                </ul>
            ) : (
                <p> Você ainda não possui nenhum lançamento </p>
                )}
        </div>
    );
};
