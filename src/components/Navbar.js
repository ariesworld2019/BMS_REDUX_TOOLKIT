import { useState, React } from "react";
import {
  Link, useNavigate
} from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = () => {

  const navigate = useNavigate();
  const handleclicklogout = () => {
    localStorage.removeItem('user_name');
    navigate("/");
    toast.success("You are successfully logged-out");
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      {
        localStorage.getItem('user_name') ? 

        <>
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/boxstockdata">Box Stock Data</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/touchwisestockcount">Touch Wise Stock Count</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/boxweightdiffer">Box Weight Difference</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/createuser">Create User</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/pdfshow">Generate PDF</Link>
                  </li> 
                </ul> 
                <button className="btn btn-secondary mx-2" onClick={handleclicklogout}  style={{color:"white"}}>
                Logout
                </button>
              </div>
            </div>
          </nav> */}


 

{/* ########################################## */}
<Button variant="dark" size="lg" outline="outline-danger" onClick={handleShow}   style={ 
                        { backgroundColor : "#ffc107ab",  
                          borderColor : "#FF1493", 
                          position : "absolute",
                          right : 20,
                          top : 1,
                          color : "black"}}>
<i className="fa fa-bars" aria-hidden="true"></i> Menu Navigation
</Button>

      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor : "#000000a1", color: "white", size : "52", width : "25%"}}>
        <Offcanvas.Header closeButton className='bg-white p-2'>
          <Offcanvas.Title style={{fontSize : "36px", fontFamily : "Bookman Old Style", color : "#fd6b60"}}>BMS Utility</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/boxstockdata">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-box" viewBox="0 0 16 16" style={{marginRight : 10}}>
<path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg> Box Stock Data</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/touchwisestockcount">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-intersect" viewBox="0 0 16 16" style={{marginRight : 10}}>
<path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2z"/>
</svg>
                   Touch Wise Stock Count</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/boxweightdiffer">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-input-cursor-text" viewBox="0 0 16 16" style={{marginRight : 10}}>
<path fillRule="evenodd" d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.17 4.17 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.17 4.17 0 0 1-2.06-.566A5 5 0 0 1 8 13.65a5 5 0 0 1-.44.285 4.17 4.17 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.5 3.5 0 0 0-.436-.294A3.17 3.17 0 0 0 5.5 2.5.5.5 0 0 1 5 2"/>
<path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>
</svg> 
                   Box Weight Difference</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/createuser">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-person-add" viewBox="0 0 16 16" style={{marginRight : 10}}>
<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
<path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg> Create User</Link>
              </li> 
              </ul> 
                  <button className="btn btn-secondary mx-2" onClick={handleclicklogout}  style={ 
                        { backgroundColor : "#ffc107ab",  
                          borderColor : "#FF1493", 
                          position : "absolute",
                          bottom : 30,
                          right : 30,
                          color : "black"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-power" viewBox="0 0 16 16" style={{marginRight : 10}}>
<path d="M7.5 1v7h1V1z"/>
<path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
</svg>
                   <b>Logout</b>
                  </button>
        </Offcanvas.Body>
</Offcanvas>

{/* ######################################### */}



<br></br><br></br>

          </>
          :
          <></>
      }

    </>
  )
}

export default Navbar
