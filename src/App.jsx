import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast from "react-hot-toast";
// User Layout Components
import Navbar from "./components/patientcomponents/common/Navbar";
import Footer from "./components/patientcomponents/common/Footer";
import { ToastContainer } from "react-toastify"; // ✅ import ToastContainer

// Doctor Components
import DocNav from "./components/doctorcomponents/doctorhome/DocNav";
import DoctorDashboard from "./pages/DoctorDashboard";
import Appointments from "./pages/Appointments";
import Schedule from "./pages/Schedule";
import Patients from "./pages/Patients";
import Profile from "./pages/Profile";

// Admin Components
import AdminNav from "./components/admincomponents/common/AdminNav";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import Doctors from "./pages/Doctors";
import Riders from "./pages/Riders";
import Reports from "./pages/Reports";
import AdminProfile from "./pages/AdminProfile";

// Rider Components
import RiderNav from "./components/ridercomponents/common/RiderNav";
import RiderDashboard from "./pages/RiderDashboard";
import Rides from "./pages/Rides";
import RiderSchedule from "./pages/RiderSchedule";
import Earnings from "./pages/Earnings";
import RiderProfile from "./pages/RiderProfile";

// User Pages
import Homepage from "./pages/Homepage";
import Medicationpage from "./pages/Medicationpage";
import Doctorpage from "./pages/Doctorpage";
import Bookridepage from "./pages/Bookridepage";
import UserAccount from "./components/patientcomponents/useraccount/UserAccount";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Profilepage from "./pages/Profilepage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";





function App() {
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <toast position="top-right" />
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        />
        <Route
          path="/medication"
          element={
            <>
              <Navbar />
              <Medicationpage />
              <Footer />
            </>
          }
        />
        <Route
          path="/doctors"
          element={
            <>
              <Navbar />
              <Doctorpage />
              <Footer />
            </>
          }
        />
        <Route
          path="/bookride"
          element={
            <>
              <Navbar />
              <Bookridepage />
              <Footer />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <Navbar />
              <UserAccount />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Loginpage />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signuppage />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profilepage />
              <Footer />
            </>
          }
        />

        {/* ================= DOCTOR ROUTES ================= */}
        <Route
          path="/doctor/dashboard"
          element={
            <>
              <DocNav />
              <DoctorDashboard />
            </>
          }
        />
        <Route
          path="/doctor/appointments"
          element={
            <>
              <DocNav />
              <Appointments />
            </>
          }
        />
        <Route
          path="/doctor/schedule"
          element={
            <>
              <DocNav />
              <Schedule />
            </>
          }
        />
        <Route
          path="/doctor/patients"
          element={
            <>
              <DocNav />
              <Patients />
            </>
          }
        />
        <Route
          path="/doctor/profile"
          element={
            <>
              <DocNav />
              <Profile />
            </>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}
        <Route
          path="/admin/dashboard"
          element={
            <>
              <AdminNav />
              <AdminDashboard />
            </>
          }
        />
        <Route
          path="/admin/users"
          element={
            <>
              <AdminNav />
              <Users />
            </>
          }
        />
        <Route
          path="/admin/doctors"
          element={
            <>
              <AdminNav />
              <Doctors />
            </>
          }
        />
        <Route
          path="/admin/riders"
          element={
            <>
              <AdminNav />
              <Riders />
            </>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <>
              <AdminNav />
              <Reports />
            </>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <>
              <AdminNav />
              <AdminProfile />
            </>
          }
        />

        {/* ================= RIDER ROUTES ================= */}
        <Route
          path="/rider/dashboard"
          element={
            <>
              <RiderNav />
              <RiderDashboard />
            </>
          }
        />
        <Route
          path="/rider/rides"
          element={
            <>
              <RiderNav />
              <Rides />
            </>
          }
        />
        <Route
          path="/rider/schedule"
          element={
            <>
              <RiderNav />
              <RiderSchedule />
            </>
          }
        />
        <Route
          path="/rider/earnings"
          element={
            <>
              <RiderNav />
              <Earnings />
            </>
          }
        />
        <Route
          path="/rider/profile"
          element={
            <>
              <RiderNav />
              <RiderProfile />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;