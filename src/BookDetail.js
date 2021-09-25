import Header from './Header'
import { withRouter } from 'react-router-dom'
import { Card, Button, Container, sweetalert2 } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import swal from 'sweetalert'

function BookDetail(props) {

    console.warn("props", props.match.params.id)
    const [data, setData] = useState([])
    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/product/" + props.match.params.id);
        result = await result.json();
        setData(result);
    })
    return (
        <div>
            <Header />
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"http://localhost:8000/" + data.file_path} />
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text><b>Author:</b> {data.author}</Card.Text>
                        <Card.Text><b>Pages:</b> {data.no_of_pages}</Card.Text>
                        <Card.Text><b>Price:</b> ${data.price}</Card.Text>
                        <Button type="submit" className="btn btn-primary">Buy Now</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default withRouter(BookDetail)

