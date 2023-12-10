import React, { useState } from 'react'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'
import {Card, CardImg, Collapse, Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle , Navbar, Nav, NavItem, NavLink, Button } from 'reactstrap'
import { useNavigate , Link } from 'react-router-dom';


const MyNavbar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar container={false} className='justify-content-end justify-content-md-between w-100' expand='md' light>
        <Button color='' className='btn-icon navbar-toggler' >
          <AlignJustify size={21} />
        </Button>
        <Collapse isOpen={isOpen} navbar>
          <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
            <Nav className='mb-0' pills>
              <NavItem >
                <NavLink className='fw-bold'    >
                  <Link to="/CoursesList">
                      <span className='d-none d-md-block'> تمام دوره ها</span>
                  </Link>
                  <Rss className='d-block d-md-none' size={14} />
                </NavLink>
              </NavItem>  
              
              <NavItem >
                <NavLink className='fw-bold'    >
                  <Link to="/ReserveCourseList">
                      <span className='d-none d-md-block'>   دوره های رزرو شده</span>
                  </Link>
                  <Rss className='d-block d-md-none' size={14} />
                </NavLink>
              </NavItem>                                         
            </Nav>

          </div>
        </Collapse>
    </Navbar>
  )
}

export default MyNavbar