import { MoreVertical, Edit, Trash } from "react-feather";

import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  InputGroupText,
  InputGroup,
  Input,
} from "reactstrap";
import http from "../../interceptor";
import { useQuery } from "react-query";
import CourseItem from "./CourseItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Search from "antd/es/input/Search";
import MyNavbar from "./MyNavbar";
import CourseGroup from "./CourseGroup/CourseGroup";

const TableCourses = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    e.target.value && setSearch(e.target.value)
    !e.target.value && setSearch('')
    console.log(search);
  };

  const getAllCourses = async () => {
    const result = await http.get(
      `/Course/CourseList?PageNumber=1&RowsOfPage=200&SortingCol=DESC&SortType=Expire&Query=${search}`
    );
    console.log(result);
    return result;
  };

  const { data, status, refetch } = useQuery(["getAllCourses" , search], getAllCourses);




  return (
    <>

      <MyNavbar/>

      <InputGroup className="mb-2 mt-8">
        <Search size={14} placeholder="جستجو..." onChange={(e)=>handleSearch(e)}  />
      </InputGroup>

      <Table responsive>
        <thead>
          <tr>
            <th className="text-nowrap ">نام دوره</th>
            <th className="text-nowrap ">عنوان دوره</th>
            {/* <th  className='text-nowrap '>سطح دوره</th> */}
            {/* <th  className='text-nowrap '>وضعیت دوره</th> */}
            <th className="text-nowrap ">نوع دوره</th>
            <th className="text-nowrap ">قیمت</th>
            <th className="text-nowrap ">وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.courseDtos.map((item, index) => {
              return (
                item.isdelete === false && (
                  <CourseItem
                    key={index}
                    id={item.courseId}
                    fullName={item.fullName}
                    typeName={item.typeName}
                    // statusName={item.statusName}
                    // levelName={item.levelName}
                    cost={item.cost}
                    title={item.title}
                    refetch={refetch}
                    isActive={item.isActive}
                  />
                )
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default TableCourses;