import Header from './Header'
import { withRouter } from 'react-router-dom'
import { Card, Button, Container, sweetalert2 } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function ComparePrice() {

    return (
        <div>
            <Header />
            <h1>Compare Price</h1>
        </div>
    )

}

export default withRouter(ComparePrice)