import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; 
import Navbar from './components/Navbar'; 
import BoxStockData from "./components/BoxStockData";
import TouchWiseStockCount from "./components/TouchWiseStockCount";
import BoxWeightDiffer from "./components/BoxWeightDiffer";
import BoxStockLogData from "./components/BoxStockLogData";
import Alert from "./components/Alert";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import Setting from "./components/Setting";
// import PDF_Show from "./components/PDFShow";
// import Js_PDF from "./components/JsPDF";



function App() {
  
  return (
    <div className="App">
        
      <Router basename="/BMS_REDUX_TOOLKIT">
        <Navbar></Navbar> 
        <Alert></Alert>
        <Routes> 
          <Route exact path="/"  element={<Login></Login>} />
          <Route exact path="/touchwisestockcount" element={<TouchWiseStockCount></TouchWiseStockCount>} />
          <Route exact path="/boxweightdiffer" element={<BoxWeightDiffer></BoxWeightDiffer>} />
          <Route exact path="/boxstocklogdata/:box_no" element={<BoxStockLogData></BoxStockLogData>} />
          <Route exact path="/createuser" element={<CreateUser></CreateUser>} />
          <Route exact path="/boxstockdata" element={<BoxStockData></BoxStockData>} />
          <Route exact path="/setting" element={<Setting></Setting>} />
          {/* <Route exact path="/pdfshow" element={<PDF_Show></PDF_Show>} />
          <Route exact path="/jspdf" element={<Js_PDF></Js_PDF>} /> */}
        </Routes>
      </Router>

    </div>

  );
} 
export default App;
