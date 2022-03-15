import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';



function Details() {
    // console.log(books)
    const [book, updateBook] = useState({})
    const { isbn } = useParams();


    useEffect(() => {
        fetch(`http://localhost:4000/books/${isbn}`)
            .then(r => r.json())
            .then(data => updateBook(data))
    }, [])


    return (
        <section className="containerHome">
            <h2 className="text-center">Best Seller</h2>
            <Container className="d-flex p-100 justify-content-around col-example">
                <section className="d-flex justify-content-around">
                    <Card.Body className="bookDetailsImg">
                        <Card.Img src={book.img} style={{ width: '18rem' }} />
                        <ListGroup className='titlePrize'>
                            <ListGroup.Item className='title'>{book.title}</ListGroup.Item>
                            <ListGroup.Item className='prize'>{book.autor}</ListGroup.Item>
                            <ListGroup.Item>{book.price}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>

                    <Card.Body className="Description">
                        <ListGroup.Item>{book.description}</ListGroup.Item>
                        <ListGroup.Item>{book.publisher}</ListGroup.Item>
                        <ListGroup.Item>{book.rating}</ListGroup.Item>
                        <ListGroup.Item>{book.ISBN}</ListGroup.Item>
                    </Card.Body>
                </section>
                {/* <p>{book.ISBN}</p> */}
            </Container>
        </section>
    )
}

export default Details;








// import React, { useEffect, useState } from "react";
// import Cards from "../../components/card";
// import { Container } from "react-bootstrap";


// function Details() {
//     const [books, updateBooks] = useState([])
//     console.log(books[0])

//     useEffect(() => {
//         fetch(`httP://localhost:4000/libros/books/${isbn}`)
//             .then(r => r.json())
//             .then(data => updateBooks(data))
//     }, [])


//     return (
//         <section className="containerHome">
//             <h2 className="text-center">Best Seller Books</h2>
//             <Container className="d-flex p-100 justify-content-around col-example">
//                 {books.length === 0 ? <h2>cargando</h2> : books.map((a, i) => {
//                     return <Cards book={a} key={i}></Cards>
//                 }
//                 )}
//             </Container>
//         </section>
//     )
// }

// export default Details;
