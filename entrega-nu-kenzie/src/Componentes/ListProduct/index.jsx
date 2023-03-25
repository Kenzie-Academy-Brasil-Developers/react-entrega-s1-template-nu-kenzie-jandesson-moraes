import { TotalMoney } from '../TotalMoney';
import { CardProduct1 } from './CardProduct1';
import { CardProduct2 } from './CardProduct2';
import '../../styles/index.css';
import '../../styles/pages/style.module.css'
// import App from '../../App';




export function ListProduct({productList, removeProductFromProductList}) {
    
    const teamTotalBuget = productList.reduce((previousValue, currentValue) => {
        if(currentValue.ProductCategory === 'Entrada'){
            return previousValue + currentValue.ProductWeight;
        } else {            
            return previousValue - currentValue.ProductWeight;
        }

    }, 0);

    return (
            <div className='containerFinance'>
                <h2> Resumo financeiro </h2>
                { productList.length > 0 ? (
                    <ul>
                    { productList.map((product) => {
                        if(product.ProductCategory === 'Entrada'){
                            return (
                                <CardProduct1 
                                key={product.id}
                                product={product}
                                removeProductFromProductList={removeProductFromProductList}
                                />
                            );
                        } else {
                            return (
                                <CardProduct2 
                                key={product.id}
                                product={product}
                                removeProductFromProductList={removeProductFromProductList}
                                />
                                );
                            }
                        })}
                        <TotalMoney teamTotalBuget={teamTotalBuget}/> 
                    </ul>
                ) : (
                    <p> Você ainda não possui nenhum lançamento </p>
                    )}
            </div>
    );
};

