import axios from 'axios';
import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardFooter, Button, Container } from 'reactstrap';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

export default function Course(props,update) {
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Deleted");
                update(id);
                // Optionally, you might want to refresh the list or do something else after deletion
            },
            (error) => {
                toast.error("Error while deletion");
            }
        );
    };

    return (
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle style={{ fontWeight: 'bold' }}>{props.Course.title}</CardSubtitle>
                <CardText>{props.Course.description}</CardText>
                <Container className='text-center'>
                    <Button color='danger' onClick={() => deleteCourse(props.Course.id)}>Delete</Button>
                    <Button color='warning m-3'>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}
