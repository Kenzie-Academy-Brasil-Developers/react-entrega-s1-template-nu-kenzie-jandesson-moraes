import { Header } from '../../Componentes/Header';

export function DefaultTemplate({children}) {
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    );
};
