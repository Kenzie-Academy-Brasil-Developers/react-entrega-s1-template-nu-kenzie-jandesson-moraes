import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DefaultTemplate } from './Templates/DefaultTemplete/index.jsx';
import { RegisterTransictionForm } from './Componentes/RegisterProductForm/index.jsx';
import { ListTransiction } from './Componentes/ListProduct/index.jsx';
import { TotalMoney } from './Componentes/TotalMoney/index.jsx';
import './Componentes/TotalMoney/index.jsx';
import './styles/index.css';

export function App() {
  
  const financeCategory = [
    {
      slug: 'Entrada',
      labol: 'Entrada',
    },
    {
      slug: 'Despesa',
      labol: 'Despesa',
    },
  ];
  
  const [transactionList, setTransactionList] = useState([]);
  
  const addProductToTransactionList = (formDate) => {
    const newtransaction = { ...formDate, id: uuidv4(), TransitionPeso: Number(formDate.TransitionPeso)};
    setTransactionList([ ...transactionList, newtransaction]);
  };
  
  const removeProductFromTransactionList = (transactionsId) => {
    const newtransactionList = transactionList.filter((transaction) => transaction.id !== transactionsId);
    setTransactionList(newtransactionList);
  };

  return (
    <DefaultTemplate>
        <div className='containerCards'>
          <div className='containerFormTotalMoney'>
          <RegisterTransictionForm financeCategory={financeCategory} addProductToTransactionList={addProductToTransactionList} />
          {transactionList.length > 0 ? (<TotalMoney transactionList={transactionList} />) : null}
          </div>
          <ListTransiction transactionList={transactionList} removeProductFromTransactionList={removeProductFromTransactionList} />
        </div>
    </DefaultTemplate>
  );
};

export default App;
