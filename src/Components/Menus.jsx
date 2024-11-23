import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function Menus() {
  return (
    <div>
      <ListGroup>
        <ListGroupItem tag={Link} to='/' action>Home</ListGroupItem>

 
        <ListGroupItem tag={Link} to='/add-course' action>Add Courses</ListGroupItem>
    
    
        <ListGroupItem tag={Link} to='/view-course' action>View Courses</ListGroupItem>
        <ListGroupItem tag={Link} to='/khalti' action>Khalti</ListGroupItem>
        <ListGroupItem tag={Link} to='/esewa' action>Esewa</ListGroupItem>
        <ListGroupItem tag={Link} to='#!' action>About</ListGroupItem>
        <ListGroupItem tag={Link} to='#!' action>Contact</ListGroupItem>
      </ListGroup>
    </div>
  )
}
