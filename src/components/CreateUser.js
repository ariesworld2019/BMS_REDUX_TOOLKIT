import React, { useEffect, useState, useRef } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from "../features/createUserSlice";
import { showUserData } from "../features/createUserSlice";
import { deleteuser } from "../features/createUserSlice";
// import { alertMsgFunction } from '../features/alertMsgSlice';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Create_User = () => {
   

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [note, setnote] = useState("");

    const dispatch = useDispatch();

    const handleclick = (e) => {
        e.preventDefault(); 
       const users = (
        {
            user_name: username, 
            password: password, 
            my_note: note, 
        }) 
        dispatch(createUser(users)).then(() => {
            dispatch(showUserData())
            toast.success("Account created successfully");
            document.getElementById("create-course-form").reset();
            setusername("")
            setpassword("")
            setnote("")
        })
       
    }

  
    //-------------------   use ref START -------------------------------
    const ref1 = useRef(null);
    const ref1close = useRef(null);
    //-------------------   use ref END -------------------------------


    //--------------------- usestate START-------------------------------
    const [id, setid] = useState();
    //--------------------- usestate END-------------------------------



    //--------------------- FETCH STORE START-------------------------------
    const usersdata = useSelector((state) => state.createuserstore.usersdata);
    //--------------------- FETCH STORE END-------------------------------

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user_name'))
        {
          dispatch(showUserData())
        }
        else
        { 
          navigate("/"); 
        }    
        // eslint-disable-next-line
    }, [])


    const delete1 = (cell, row) => {
        return (
            <div>
                <i
                    className="fa fa-trash aab" style={{ color: 'red' }} onClick={() => {
                        setid(row.id)
                        ref1.current.click();
                    }}
                ></i>
            </div>

        )
    }


    const columns = [
        {
            text: 'Delete User',
            dataField: 'Deleted',
            formatter: delete1,
            editable: true,
            headerStyle: { backgroundColor: 'whitesmoke', width: '70px' },

        },
        {
            text: "User Name",
            dataField: "user_name",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
              }), 
        },
        {
            text: "Password",
            dataField: "password",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
              }), 
        },
        {
            text: "Note",
            dataField: "my_note",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
              }), 
        },
    ];

    const defaultSorted = [{
        dataField: 'id',
        order: 'desc'
    }];

    //------------pagination property
    const pagination = paginationFactory({
        page: 1,
        sizePerPageList: [{
            text: '10', value: 10
        },
        {
            text: '25', value: 25
        }, {
            text: 'All', value: usersdata.length
        }],
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        // onPageChange: function (page, sizePerPage) {
        //   console.log('page', page);
        //   console.log('sizePerPage', sizePerPage);
        // },
        // onSizePerPageChange: function (page, sizePerPage) {
        //   console.log('page', page);
        //   console.log('sizePerPage', sizePerPage);
        // }
    });

    return (
        
 
<Container fluid={true}>
            
            <div style={{color : 'red', fontSize : "36px", fontFamily : "Maiandra GD"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-person-add" viewBox="0 0 16 16" style={{marginRight : 10}}>
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                </svg><b>Create User</b>
            </div>
                   
 

    <Card>
      <Card.Body>  
        
        <form onSubmit={handleclick} id="create-course-form">
                        <table className="table" style={{borderBlockColor : 'white', marginBottom : '0px'}}>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Name</b></td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="user_name"
                                            name="user_name"
                                            onChange={(e) => setusername(e.target.value)} required  autoFocus/> 
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Password</b></td>
                                    <td>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            onChange={(e) => setpassword(e.target.value)} required />
                                    </td>
                                </tr>

                                <tr>
                                    <td style={{ textAlign: "right" }}><b>Note</b></td>
                                    <td>
                                        <textarea name="my_note" id="my_note" className="form-control" onChange={(e) => setnote(e.target.value)}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ textAlign: "right" }}>

                                        <button type="submit" className="btn btn-info" style={{ width: "80%", backgroundImage: "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))" }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard-plus-fill" viewBox="0 0 16 16">
    <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm4.5 6V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5a.5.5 0 0 1 1 0"/>
    </svg> <b>Add</b> </button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
       
      </Card.Body>
    </Card>




 

            {/* -------------------------------------- MODAL START ---------------------------------------------------- */}
            <button
                ref={ref1}
                type="button"
                className="btn btn-primary d-none"
                data-toggle="modal"
                data-target="#exampleModal"
            >
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Are you sure to delete user ?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <button type="button" className="btn btn-danger" style={{ marginRight: "30px" }} onClick={() => {
                                dispatch(deleteuser(id)).then(() => {
                                    ref1close.current.click();
                                    toast.success("User Deleted successfully"); 
                                })
                            }}>Yes , Delete It !!!</button>
                            <button ref={ref1close} type="button" className="btn btn-secondary" data-dismiss="modal">No , Cancel It !!!</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------- MODAL END ---------------------------------------------------- */}



            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={usersdata}
                columns={columns}
                search
                wrapperClasses="table-responsive"
            >
                {
                    props => (
                        
                            <BootstrapTable
                                defaultSorted={defaultSorted}
                                pagination={pagination}
                                {...props.baseProps}
                                filter={filterFactory()}
                                noDataIndication="No data to display"
                            />
                        
                    )
                }
            </ToolkitProvider>
</Container>
        
    )
}

export default Create_User
