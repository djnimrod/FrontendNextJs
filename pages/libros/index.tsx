import Link from "next/link"

// este metodo -getStaticProps- solo se ejecuta cuando se hace un build(deploy).
// o cuando se hace un commit y se vuelve a ver los cambios en el codigo - repositorio
//asi que la cambiamos con -getServerSideProps-
export async function getServerSideProps(){

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`)

        const data = await res.json();
       
            return {
                props:{
                    books: data
                },
            //revalidate: 10    
            // con revalidate se ejecuta cada 10 seg de acuerdo a la data
            };
        
}


const Booklist = ( { books } ) => {

    async function handleDelete( e, bookId ){
        e.preventDefault()

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${ bookId }`,{
            method : 'POST',
            headers : {
                accept : 'application/json',
                'content-type' : 'application/json',
            },
            body : JSON.stringify({
                _method : 'DELETE'
            })
        })

        if (res.ok) {
            window.location.href = `/libros`           
        }
            const data = await res.json()
    }
    
    return (
    
        <div>
            <h1>libros</h1>
            <ul data-cy = "book-list">
                { books.map( book => (
                    <li key = {`book-${book.id}`}>
                        <Link href={`/libros/${book.id}`}
                        data-cy = {`link-to-visit-book-${book.id}`}
                        >
                            {book.title}
                         </Link>
                         {' - '}
                         <Link 
                            href={`/libros/${book.id}/editar`} 
                            data-cy = {`link-to-edit-book-${book.id}`}
                            >
                            Editar book
                        </Link>
                        {' - '}
                        <form 
                        onSubmit = { (e) =>  handleDelete (e, book.id)}
                            style = {{ display : 'inline' }}
                            >
                            <button
                                data-cy = {`link-to-delete-book-${book.id}`}
                            >Eliminar</button>
                        </form>

                    </li>
                ))}
            </ul>            
        </div>
        
        )
}

export default Booklist;