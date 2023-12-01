import React,{useEffect,useState} from "react";
import axios from "axios";

const GetUser = () => {
    const [users,setUsers]=useState([]);

    const userlist = async() => {
        const response = await axios.get("http://localhost:5000/users");
        console.log(response);
        setUsers(response.data);
    }
    
    useEffect(()=>{
        userlist();
    },[]);


    return<> 
    <h3>User List</h3>
    <table className="table">
        <thead>
            <tr>
            <td><b>SNo.</b></td>
            <td><b>First Name</b></td>
            <td><b>Last Name</b></td>
            <td><b>Email</b></td>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,index)=>(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    </tr>
                ))
            }

        </tbody>
    </table>
    </>
}

export default GetUser;