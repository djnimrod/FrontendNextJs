import Link from "next/link";

export async function getStaticProps({params}){

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${params.bid}`)

    const data = await res.json()
   
        return {
            props : {
                book : data
            },
        };
    
}

export async function getStaticPaths(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`)

    const data = await res.json();

    return {
        paths : data.map( book => {
           return { params : { bid : String (book.id) }}
        }),
        fallback: 'blocking'
        // cambiamos de false a 'blocking' para que se ejecute al instante
        // ssr server side rendering..osea a demanda o peticion se hace la actualizacion de la vista
    }
}

const BookDetail = ({ book }) => {
    return (
        <>
            <h1> {book.title}</h1>    
            <Link href="/libros">Book List</Link>
        </>
    )
};



export default BookDetail;