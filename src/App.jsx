import {
  BrowserRouter as Router,
 
  Routes,
  Route,
} from "react-router-dom";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import SignUpForm from "./pages/signupForm/SignUpForm";


import "./App.css";

function App() {
  return (
 <div className="relative overflow-hidden">
     <Router>
      <Routes>
        {/* Routes for the multi-step form */}
        <Route path="/" element={<SignUpForm />} />
        {/* Routes for the AdminDashboard */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
 </div>
  );
}

export default App;
