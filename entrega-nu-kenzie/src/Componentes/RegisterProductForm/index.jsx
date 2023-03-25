import { useState } from 'react';
import { TotalMoney } from '../TotalMoney';
import '../../styles/index.css';
import '../../styles/pages/style.module.css'


export function RegisterProductForm ({categories, addProductToProductList}) {
    
    const [formData, setformData] = useState({
        ProductName: '',
        ProductWeight: '',
        ProductCategory: '',
    });

    function submit(event) {
        event.preventDefault()
        addProductToProductList(formData)
        setformData({
            ProductName: '',
            ProductWeight: '',
            ProductCategory: '',
        });
    };
    
    const isEmpty = formData.ProductName === '' || formData.ProductWeight === '' || formData.ProductCategory === '';

    return(
        <>
            <form onSubmit={submit}>
                <label>Descrição</label>
                <input type='text' value={formData.ProductName} onChange={(event) => setformData({...formData, ProductName: event.target.value})} placeholder='Digite aqui sua descrição' />
                <span className='ex'> Ex: Compra de roupas </span>

                <label htmlFor=''> Valor (R$) </label>
                <input type='number' value={formData.ProductWeight} onChange={(event) => setformData({...formData, ProductWeight: event.target.value})} placeholder='1' />
                <label htmlFor=''> Tipo de valor </label>

                <select value={formData.ProductCategory} onChange={(event) => setformData({...formData, ProductCategory: event.target.value})} >
                    <option value=''> Selecione uma categoria </option>
                    {categories.map(category => (
                        <option key={category.slug} value={category.slug}> {category.labol} </option>
                        ))};
                </select>
                <button className='btnForm' type='submit' disabled={isEmpty ? true : false}> Inserir Valor </button>
            </form>
        </>
    );
};