
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ShowAllEmpComp from "./Component/ShowAllEmpComp";
import ShowAddEmpComp from "./Component/ShowAddEmpComp";
import DeleteEmpComp from "./Component/DeleteEmpComp";
import ShowUpdateEmpComp from "./Component/ShowUpdateEmpComp";


function App() {
  return (
    <Router>
        <div>
          <Link to="/">Home&ensp;</Link>
          <Link to="/ShowAddEmpPage">AddEmp&ensp;</Link >
          <Link to="/DispListAllEmpPage">ShowAllEmp&ensp;</Link >
          <Link to="/DeleteEmpPage">DeleteEmp&ensp;</Link >
          <Link to="/UpdateEmpPage">UpdatEmp&ensp;</Link >
        </div>
        <hr color="green" size="5px"/>
        <Routes>
          <Route path="/" element={<ShowAllEmpComp/>}></Route>
          <Route path="/DispListAllEmpPage" element={<ShowAllEmpComp/>}></Route>
          <Route path="/ShowAddEmpPage" element={<ShowAddEmpComp/>}></Route>
          <Route path="/DeleteEmpPage" element={<DeleteEmpComp/>}></Route>
          <Route path="/ShowUpdateEmpPage/:eid" element={<ShowUpdateEmpComp/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
