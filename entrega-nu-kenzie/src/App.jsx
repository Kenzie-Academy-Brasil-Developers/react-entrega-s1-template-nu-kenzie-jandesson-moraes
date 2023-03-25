import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RegisterProductForm } from './Componentes/RegisterProductForm/index.jsx';
import { DefaultTemplate } from './Templates/DefaultTemplete/index.jsx';
import { ListProduct } from './Componentes/ListProduct/index.jsx';
import { TotalMoney } from './Componentes/TotalMoney/index.jsx';
import './Componentes/TotalMoney/index.jsx';
import './styles/index.css';

export function App({teamTotalBuget}) {

  const categories = [
    {
      slug: 'Entrada',
      labol: 'Entrada',
    },
    {
      slug: 'Despesa',
      labol: 'Despesa',
    },
  ];

    const [productList, setproductList] = useState([]);

    function addProductToProductList(formDate) {
      const newProduct = { ...formDate, id: uuidv4(), ProductWeight: Number(formDate.ProductWeight)};
      setproductList([ ...productList, newProduct]);
    };

    function removeProductFromProductList(productId) {
      const newProductList = productList.filter((product) => product.id !== productId);
      setproductList(newProductList);
    };

  return (
    <DefaultTemplate>
          <div className='containerCards'>
            <RegisterProductForm categories={categories} addProductToProductList={addProductToProductList} />
            <ListProduct productList={productList} removeProductFromProductList={removeProductFromProductList} />
          </div>
    </DefaultTemplate>
  );
};

export default App
