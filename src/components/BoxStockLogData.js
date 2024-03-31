import React, { useEffect,useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { useDispatch, useSelector } from 'react-redux'
import { boxstocklogdata } from '../features/boxLogDataSlice';
import { deleteboxitm } from '../features/boxLogDataSlice';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Container from 'react-bootstrap/Container';

const Box_Stock_Log_Data = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const [id, setid] = useState();

    //--------------------- FETCH STORE START-------------------------------
    const users = useSelector((state) => state.boxlogdatastore.boxdifferReportData);
    //--------------------- FETCH STORE END-------------------------------

    
  //-------------------   use ref -------------------------------
  const ref1 = useRef(null);
  const ref1close = useRef(null);


    useEffect(() => {
        dispatch(boxstocklogdata(params.box_no))
        // eslint-disable-next-line
    }, [])




    const delete1 = (cell, row) => {
        return (
            <div>
                <i
                    className="fa fa-trash aab" style={{ color: 'red' }} onClick={() => {
                        setid(row.id)
                        ref1.current.click();
                       
                        // dispatch(deleteboxitm(row.id)).then(() => {
                        //     dispatch(alertMsgFunction("Entry Deleted Successfully"))
                        //     setTimeout(() => {
                        //         dispatch(alertMsgFunction(""))
                        //       }, 600);
                        // })
                    }}
                ></i>
            </div>
        )
    }

    const columns = [
        {
            text: 'Delete',
            dataField: 'id',
            formatter: delete1,
            editable: true,
            headerStyle: { backgroundColor: 'whitesmoke', width: '65px' },
        },
        {
            text: "Box No",
            dataField: "box_no",
            sort: true,
            editable: false,
            //style: { backgroundColor: 'green' }
            //  headerAlign: 'center',
            //  align: 'center'
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter(),
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
            text: "Box Name",
            dataField: "box_name",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter(),
        },
        {
            text: "No",
            dataField: "no",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter(),
        },
        {
            text: "Mini Box Wt",
            dataField: "mini_box_wt",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter()
        },
        {
            text: "Big Box Wt",
            dataField: "big_box_wt",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter(),
        },
        {
            text: "Total Wt",
            dataField: "total_wt",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter(),
        },
        {
            dataField: "total_fine_wt",
            text: "Total Fine Wt",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter(),
        },
        {
            text: "Remarks",
            dataField: "remarks",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke',width:'180px' },
            filter: textFilter(),
        },
        {
            text: "Touch",
            dataField: "touch",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter(),
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


    // if(loading){
    //   return (<h2>Loading</h2>)
    // }


  



    return (
        <>
 <Container fluid={true}>
 <div style={{color : 'red', fontSize : "36px", fontFamily : "Maiandra GD",}}>
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg><b>Box Stock Log Data</b>
</div>
 
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
        <div  className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Are you sure to delete entry ?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <button type="button" className="btn btn-danger" style={{marginRight:"30px"}} onClick={()=>{
                        dispatch(deleteboxitm(id)).then(() => {
                            ref1close.current.click();
                            toast.success("Entry Deleted Successfully");
                            // dispatch(alertMsgFunction("Entry Deleted Successfully"))
                            // setTimeout(() => {
                            //     dispatch(alertMsgFunction(""))
                            //   }, 1000);
                        })
            }}>Yes , Delete It !!!</button>
            <button  ref={ref1close} type="button" className="btn btn-secondary" data-dismiss="modal">No , Cancel It !!!</button>
            </div>  
          </div>
        </div>
      </div>
      {/* ------------------------------- MODAL END ---------------------------------------------------- */}


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
        </>
    )
}

export default Box_Stock_Log_Data