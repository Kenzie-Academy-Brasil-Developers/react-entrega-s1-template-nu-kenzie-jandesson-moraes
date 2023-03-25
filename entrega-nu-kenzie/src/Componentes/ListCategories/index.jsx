export function ListCategories({categories}) {
    return(
        <ul>
            {categories.map(({labol, slug}) => (
                <li key={slug}> {labol.Entrada} </li>
            ))};
        </ul>
    );
};
