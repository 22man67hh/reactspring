import React, { useEffect, useState } from 'react'
import Course from './Course'
import { Alert } from 'reactstrap'
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function AllCourses() {
  useEffect(()=>{
document.title="All Courses";
   
  },[]);

  // function to call server
  const getAllCourses = () => {
    axios.get(`${base_url}/courses`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          toast.success("Courses have been loaded");
          setCourses(response.data);
        } else {
          toast.error("Failed to load courses");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  
  useEffect(() => {
    getAllCourses();
  }, []);
  
    const[courses,setCourses]=useState([
      
    ])
    const removeCourseById=(id)=>{
      setCourses(courses.filter((c)=>c.id!=id));
    }
  return (
    <div>
      <h1>All courses</h1>
      <p>List of courses are a follows</p>
      {
        courses.length>0?courses.map((item)=>
            <Course key={item.id} Course={item} update={removeCourseById}/>        ):"No Courses available"
      }
    </div>
  )
}
