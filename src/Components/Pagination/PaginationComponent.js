import "./paginationStyle.css"

export default function PaginationComponent({query,setQuery}) {

    const prevPage = () => {
        const pageP = +query.get('page')-1;
        setQuery({page:`${pageP}`})
    };

    const nextPage = () => {
        const pageN = +query.get('page')+1;
        setQuery({page:`${pageN}`})
    };

    return (
        <div className={'buttonBox'}>
            <button className={'butt'} onClick={prevPage}>&#8249;</button>
            <button className={'butt'} onClick={nextPage}>&#8250;</button>
        </div>
    );
}