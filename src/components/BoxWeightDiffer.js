import React, { useEffect } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { useDispatch, useSelector } from 'react-redux'
import { boxwtdiffdata } from '../features/boxWeightDifferSlice';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Box_Weight_Differ = () => {
    const dispatch = useDispatch();
    //--------------------- FETCH STORE START------------------------------- 
    const data = useSelector((state) => state.boxwtdiffstore.boxdifferReportData);
    //--------------------- FETCH STORE END-------------------------------


    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user_name'))
        {
          dispatch(boxwtdiffdata())
        }
        else
        { 
          navigate("/"); 
        }   
        // eslint-disable-next-line
    }, [])



    const columns = [
        {
            text: "Box No",
            dataField: "box_no",
            sort: true,
            editable: false,
            //style: { backgroundColor: 'green' }
            //  headerAlign: 'center',
            //  align: 'center'
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
              }), 
        },
        {
            text: "Touch",
            dataField: "touch",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
              }),  
        },
        {
            text: "Box Name",
            dataField: "box_name",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
            }), 
        },
        {
            text: "Total Fine WT (previous)",
            dataField: "Total Fine WT (previous)",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
            }),  
        },
        {
            text: "Total Fine WT (last)",
            dataField: "Total Fine WT (last)",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
            }),  
        },
        {
            text: "Difference WT",
            dataField: "Difference WT",
            sort: true,
            editable: false,
            headerStyle: { backgroundColor: 'whitesmoke' },
            filter: textFilter({
                placeholder: 'search',
              }), 
            style: (cell, row, rowIndex, colIndex) => {
                var aa = cell
                if (aa < 0) {
                    return {
                        backgroundColor: 'red',
                        color: 'white',
                        fontWeight: 'bold',
                    };
                }
                else {
                    return {
                        backgroundColor: 'green',
                        color: 'white',
                        fontWeight: 'bold',
                    };
                }

            }
        },
    ];



    const defaultSorted = [{
        dataField: 'box_no',
        order: 'asc'
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
            text: 'All', value: data.length
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

    const handleclick = async (e) => { 
        e.preventDefault();    
        const response = await fetch("http://localhost/react_php_bms/api/box_wt_diff_report_print.php", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
        });
    };


    return (
<>

<Container fluid={true}>

    <div style={{color : 'red', fontSize : "36px", fontFamily : "Maiandra GD",}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-input-cursor-text" viewBox="0 0 16 16" style={{marginRight : 10}}>
        <path fillRule="evenodd" d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.17 4.17 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.17 4.17 0 0 1-2.06-.566A5 5 0 0 1 8 13.65a5 5 0 0 1-.44.285 4.17 4.17 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.5 3.5 0 0 0-.436-.294A3.17 3.17 0 0 0 5.5 2.5.5.5 0 0 1 5 2"/>
        <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>
        </svg> <b>Box Weight Difference</b>
    </div>
        <div>
            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={data}
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
            <form onSubmit={handleclick} id="create-course-form">
            <button hidden type="submit" className="btn btn-info" style={{ width: "80%", backgroundImage: "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))" }}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-`print`er-fill" viewBox="0 0 16 16">
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>

            <b> Print</b> </button>
            </form>

            <a hidden href='http://192.168.1.4/react_php_bms/api/bill_pdf/Box%20Weight%20Difference%20Report.pdf' target="_blank"
                    rel="noreferrer">
                    Open Second PDF
                </a>
        </div>
</Container>

</>        
    )
}

export default Box_Weight_Differ
