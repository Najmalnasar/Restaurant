import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function ResturantsCard({ data }) {
    return (
        <Link to={`details/${data.id}`}>
            <Card className='my-3 p-3 rounded'>
                <Card.Img variant="top" src={data.photograph} className='p-3' />
                <Card.Body>
                    <Card.Title as="div">{data.name}</Card.Title>
                    <Card.Text as="div">
                        <p>Cusin{data.cuisine_type}</p>
                    </Card.Text>
                    <Card.Text as="div">
                        <p>Location{data.neighborhood}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>

    )
}

export default ResturantsCard

