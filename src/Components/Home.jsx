import React, { useEffect } from 'react'
import{Container,Button} from "reactstrap"
export default function Home() {
  useEffect(()=>{
    document.title="Home";
       
      },[]);
  return (
  
      <div className='text-center mt-1 bg-info '><h1>Learn Code with Manish</h1>
      <p>This is my first React App using spring boot as backend</p>
     <Button color='primary mb-4' outline> Start Using</Button>
      
      </div>
    
  )
}
