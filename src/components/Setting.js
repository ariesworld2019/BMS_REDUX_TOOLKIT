import React, { useEffect, useRef, useState } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { useDispatch, useSelector } from 'react-redux'
import { showSettingData } from '../features/settingSlice';
import { useNavigate } from 'react-router-dom';
// import { alertMsgFunction } from '../features/alertMsgSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';

const Setting = () => {

    const dispatch = useDispatch();
    //--------------------- FETCH STORE START-------------------------------
    const users = useSelector((state) => state.settingstore.usersdata);  
    //--------------------- FETCH STORE END-------------------------------
 
  
    //-------------------   use ref START -------------------------------
    const ref1 = useRef(null);
    const ref1close = useRef(null);
    //-------------------   use ref END -------------------------------

 
    //--------------------- usestate START-------------------------------
    const [checkbox_chk, setchk] = useState("");
    //--------------------- usestate END-------------------------------

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user_name')) {
            dispatch(showSettingData());
        }
        else {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [])

    // const useradd = useSelector((state) => state.settingstore.usersdata);  
    // useEffect(() => { 
    //     if(useradd!="")
    //     {
    //         console.log(useradd," ::mahadev")
    //         console.log(useradd[0].email_on_off)
    //     } 
    //     // eslint-disable-next-line
    // }, [useradd])

 
     

    const columns = [
        {
            text: "Email id",
            dataField: "email_id",
            sort: true,
            editable: false,
            //style: { backgroundColor: 'green' }
            //  headerAlign: 'center',
            //  align: 'center'
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
            }),
            // style: (cell, row, rowIndex, colIndex) => {
            //   if (cell === "11.256") {
            //     return {
            //       backgroundColor: 'red'
            //     };
            //   }
            //   else
            //   {
            //     return {
            //       //backgroundColor: 'green'
            //     };
            //   }

            // } 
        },
        {
            text: "Email id (CC)",
            dataField: "email_id_cc",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
            }),
        },
        {
            text: "Email id (CC)",
            dataField: "email_on_off",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            formatter: (cellContent, row) => (

                <div className="checkbox disabled">
                    <label>
                        <input type="checkbox" checked={row.email_on_off === "on" ? true : false}
                            onChange={(e) => {
                                console.log(e.target.checked)
                            }} />
                    </label>
                </div>
            )

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
            text: 'All', value: users.length
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
           
            {/* -------------------------------------- MODAL START ---------------------------------------------------- */}
            <div style={{ color: 'red', fontSize: "36px", fontFamily: "Maiandra GD", }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-box" viewBox="0 0 16 16" style={{ marginRight: 10 }}>
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg><b>Box Stock Data</b>
            </div>
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
                            <h5 className="modal-title" id="exampleModalLabel">Are you sure to delete box ?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <button type="button" className="btn btn-danger" style={{ marginRight: "30px" }}
                            >Yes , Delete It !!!</button>
                            <button ref={ref1close} type="button" className="btn btn-secondary" data-dismiss="modal">No , Cancel It !!!</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------- MODAL END ---------------------------------------------------- */}
                
                {
                users&&
                users.map(todo => <h2>{todo}</h2>)
                }
            
            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={users}
                columns={columns}
                search
                wrapperClasses="table-responsive"
            >
                {
                    props => (
                        <>
                            <BootstrapTable
                                defaultSorted={defaultSorted}
                                pagination={pagination}
                                {...props.baseProps}
                                filter={filterFactory()}
                                noDataIndication="No data to display"
                            />
                        </>
                    )
                }
            </ToolkitProvider>

        </Container>
    )
}

export default Setting
