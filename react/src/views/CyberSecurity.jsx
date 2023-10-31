import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import Badge from 'react-bootstrap/Badge';
import {Link} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";


const spinnerStyles = {
  border: "10px solid rgba(0, 0, 0,0.5)",
  borderTop: "10px solid #3498db",
  borderRadius: "50%",  
  width: "100px",
  height: "100px",
  position: "absolute",
  top: "200%",
  left: "45%",
  animation: "spin 1s linear infinite",
  transform: "translate(-50%, -50%)",
};



export default function CyberSecurity() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setNotification} = useStateContext()
  

  useEffect(() => {    
    getUsers();
  }, [])

  const onDeleteClick = user => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return
    }
    axiosClient.delete(`/users/${user.id}`)
      .then(() => {
        setNotification('User was successfully deleted')
        getUsers()
      })
  }

  const getUsers = () => {
    setLoading(true)
    setTimeout(() => {
      axiosClient
        .get("/users")
        .then(({ data }) => {
          setLoading(false);
          setUsers(data.data);
        })
        .catch(() => {
          setLoading(false);
        });
    },);
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>Risk Assessment Checklist - FTC Safeguards Rule Compliance Software:</h1>
        {/* <Link className="btn-add" to="/users/new">Add new</Link> */}
      </div>
      <div classname="row">
      <div className="card animated fadeInDown mt-3 col-md-12">
        <table>
          <thead>
            <h6 className="heading mt-2 mb-2">Identify and Assess Assets</h6>
          <tr>
            <th>User</th>
            <th>Course Type</th>
            <th>Not started</th>
            <th>In process</th>
            <th>Completed</th>
            <th>Action</th>
           
          </tr>
          </thead>
          {loading &&
            <tbody>
            <tr>
              <td colSpan="5" class="text-center">
              <div style={spinnerStyles}></div>
              </td>
            </tr>
            </tbody>
          }
       
            <tbody>
          
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="info" text="dark">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
                <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="info" text="dark">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="info" text="dark">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="info" text="dark">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="info" text="dark">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
           
            </tbody>
          
        </table>
      </div>

      <div className="card animated fadeInDown mt-3 col-md-12">
        <table>
          <thead>
            <h6 className="heading mt-2 mb-2">Identify and Assess Threats</h6>
          <tr>
            <th>User</th>
            <th>Course Type</th>
            <th>Not started</th>
            <th>In process</th>
            <th>Completed</th>
            {/* <th>Action</th> */}
           
          </tr>
          </thead>
          {loading &&
            <tbody>
            <tr>
              <td colSpan="5" class="text-center">
              {/* <div style={spinnerStyles}></div> */}
              </td>
            </tr>
            </tbody>
          }
       
            <tbody>
          
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="danger">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="danger">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="danger">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="danger">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
              <tr>
                <td>abhishek</td>
                <td>Risk course</td>
                <td> <Badge pill bg="danger">
        Warning
      </Badge></td>
                <td> <Badge pill bg="warning"  text="dark">
        Success
      </Badge></td>
                <td><Badge pill bg="success">
        Work done
      </Badge></td>
              
      <td>
                <button className="btn-edit">View</button>                
                </td>
              </tr>
           
            </tbody>
          
        </table>
      </div>

      </div>
    </div>
  )
}
