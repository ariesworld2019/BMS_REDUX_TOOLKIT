import React, { useEffect } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { useDispatch, useSelector } from 'react-redux'
import { touchwisedata } from '../features/touchWiseStockSlice';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Touch_Wise_Stock_count = () => {
  const dispatch = useDispatch();
  //--------------------- FETCH STORE START-------------------------------

  const touchReportData = useSelector((state) => state.touchreportstore.touchReportData);
  //--------------------- FETCH STORE END-------------------------------


  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user_name')) {
      dispatch(touchwisedata())
    }
    else {
      navigate("/");
    }
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
        // delay: 1000, // default is 500ms
        // style: {
        //   backgroundColor: ''
        // },
        // className: 'test-classname',
        // placeholder: 'search',
        // onClick: e => console.log(e)
        placeholder: 'search',
      })



    },
    {
      text: "Total Weight",
      dataField: "total_weight",
      sort: true,
      editable: false,
      headerStyle: { backgroundColor: 'whitesmoke' },
      filter: textFilter({
        placeholder: 'search',
      }), 
    },
    {
      text: "Total Fine Weight",
      dataField: "total_fine_weight",
      sort: true,
      editable: false,
      headerStyle: { backgroundColor: 'whitesmoke' },
      filter: textFilter({
        placeholder: 'search',
      }), 
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
      text: 'All', value: touchReportData.length
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
    const response = await fetch("http://localhost/react_php_bms/api/touch_wise_report_print.php", {
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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-intersect" viewBox="0 0 16 16" style={{marginRight : 10}}>
        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2z"/>
        </svg><b>Touch Wise Stock Count</b>
    </div>
    
    <div>
      <ToolkitProvider
        bootstrap4
        keyField='id'
        data={touchReportData}
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
        <button hidden type="submit" className="btn btn-info"  style={{ width: "80%", backgroundImage: "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))" }}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16">
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>
          
          <b> Print</b> </button>
      </form>
    </div>

</Container>

</>
  )
}

export default Touch_Wise_Stock_count
