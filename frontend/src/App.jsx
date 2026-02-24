import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User Layout Components
import Navbar from "./components/patientcomponents/common/Navbar";
import Footer from "./components/patientcomponents/common/Footer";

// Doctor Components
import DocNav from "./components/doctorcomponents/doctorhome/DocNav";
import DoctorDashboard from "./pages/doctorpages/DoctorDashboard";
import Appointments from "./pages/doctorpages/Appointments";
import Schedule from "./pages/doctorpages/Schedule";
import Patients from "./pages/doctorpages/Patients";
import Profile from "./pages/doctorpages/Profile";

// Admin Components
import AdminNav from "./components/admincomponents/common/AdminNav";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import Users from "./pages/adminpages/Users";
import Doctors from "./pages/adminpages/Doctors";
import Riders from "./pages/adminpages/Riders";
import Reports from "./pages/adminpages/Reports";
import AdminProfile from "./pages/adminpages/AdminProfile";

// Rider Components
import RiderNav from "./components/ridercomponents/common/RiderNav";
import RiderDashboard from "./pages/riderpages/RiderDashboard";
import Rides from "./pages/riderpages/Rides";
import RiderSchedule from "./pages/riderpages/RiderSchedule";
import Earnings from "./pages/riderpages/Earnings";
import RiderProfile from "./pages/riderpages/RiderProfile";

// User Pages
import Homepage from "./pages/userpages/Homepage";
import Medicationpage from "./pages/userpages/Medicationpage";
import Doctorpage from "./pages/userpages/Doctorpage";
import Bookridepage from "./pages/userpages/Bookridepage";
import UserAccount from "./components/patientcomponents/useraccount/UserAccount";
import Loginpage from "./pages/userpages/Loginpage";
import Signuppage from "./pages/userpages/Signuppage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";





function App() {
  return (
    <Router>
      <Routes>

        {/* ================= USER ROUTES ================= */}
        <Route
          path="/"
          element={
            <>
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

        {/* 404 Route - Must be last */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;