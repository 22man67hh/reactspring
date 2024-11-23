import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

export default function AddCourse() {
    useEffect(() => {
        document.title = "Add Courses";
    }, []);

    const [course, setCourse] = useState({
        id: '',
        title: '',
        description: ''
    });

    const handleForm = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(course); // Log the course object
        postDataTo(course); // Pass course data to post function
    };

    // Creating to post data to server
    const postDataTo = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                toast.success("Form Submitted ");
                // Reset the course state to clear input fields
                setCourse({
                    id: '',
                    title: '',
                    description: ''
                });
            },
            (error) => {
                console.log(error);
                toast.error("Error while submitting");
            }
        );
    };

    return (
        <Fragment>
            <h1 className='text-center my-3'>Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="userId">Course Id</label>
                    <Input
                        type='text'
                        placeholder='Enter Here'
                        name="userId"
                        value={course.id} // Bind value to state
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="CourseTitle">Course Title</label>
                    <Input
                        type='text'
                        placeholder='Enter Title Here'
                        name="courseTitle"
                        value={course.title} // Bind value to state
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="CourseDesc">Course Description</label>
                    <Input
                        type='textarea'
                        placeholder='Enter Description Here'
                        name="courseDesc"
                        id="desc"
                        style={{ height: 200 }}
                        value={course.description} // Bind value to state
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                    />
                </FormGroup>
                <Container className='text-center'>
                    <Button type="submit" color='success'>Add Course</Button>
                    <Button 
                        type="button" // Prevent form submission on button click
                        color='warning m-3'
                        onClick={() => setCourse({ id: '', title: '', description: '' })} // Clear fields on button click
                    >
                        Clear
                    </Button>
                </Container>
            </Form>
        </Fragment>
    );
}
