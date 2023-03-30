import { useState } from 'react';
import '../../styles/index.css';

export const RegisterTransictionForm = ({financeCategory, addProductToTransactionList}) => {

    const [formData, setformData] = useState({
        TransactionName: '',
        TransitionPeso: '',
        TransitionCategory: '',
    });

    const submit = (event) => {
        event.preventDefault()
        addProductToTransactionList(formData)
        setformData({
            TransactionName: '',
            TransitionPeso: '',
            TransitionCategory: '',
        });
    };

    const isEmpty = formData.TransactionName === '' || formData.TransitionPeso === '' || formData.TransitionCategory === '';

    return(
        <>
            <form onSubmit={submit}>
                <label>Descrição</label>
                <input type='text' value={formData.TransactionName} onChange={(event) => setformData({...formData, TransactionName: event.target.value})} placeholder='Digite aqui sua descrição' />
                <span className='ex'> Ex: Compra de roupas </span>

                <label htmlFor=''> Valor (R$) </label>
                <input type='number' value={formData.TransitionPeso} onChange={(event) => setformData({...formData, TransitionPeso: event.target.value})} placeholder='1' />
                <label htmlFor=''> Tipo de valor </label>

                <select value={formData.TransitionCategory} onChange={(event) => setformData({...formData, TransitionCategory: event.target.value})} >
                    <option value=''> Selecione uma categoria </option>
                    {financeCategory.map(finance => (
                        <option key={finance.slug} value={finance.slug}> {finance.labol} </option>
                        ))};
                </select>
                <button className='btnForm' type='submit' disabled={isEmpty ? true : false}> Inserir Valor </button>
            </form>
        </>
    );
};
