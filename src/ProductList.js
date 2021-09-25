import Header from './Header'
import React, { useState, useEffect, Component } from 'react'
import { Table } from 'react-bootstrap'
import { width } from 'dom-helpers';
import { Container, Button, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(async () => {
        let result = await fetch('http://localhost:8000/api/list');
        result = await result.json();
        setData(result)
    }, [])
    console.warn("data", data);

    return (
        <div>
            <Header />
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th><button type="button" class="btn btn-outline-warning">Compare</button></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.author}</td>
                                    <td>${item.price}</td>
                                    <td><img style={{ width: 90 }} src={"http://localhost:8000/" + item.file_path} /></td>
                                    <td><input type="checkbox" id="" name="" value="" /></td>
                                    <td><Link to={"detail/" + item.id}><Button>Details</Button></Link></td>
                                </tr>)
                        }
                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Container>
        </div>
    )
}
export default ProductList