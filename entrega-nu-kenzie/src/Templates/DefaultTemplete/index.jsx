import { Header } from '../../Componentes/Header';

export const DefaultTemplate = ({children}) => {
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    );
};

