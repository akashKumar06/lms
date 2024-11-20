import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import DashboardStudents from "./features/Dashboard/students/DashboardStudents";
import DashboardAnalytics from "./features/Dashboard/analytics/DashboardAnalytics";
import Rooms from "./pages/Rooms";
import Attendence from "./pages/Attendence";
import Accounts from "./pages/Accounts";
import Maintanance from "./pages/Maintanance";
import AppLayout from "./pages/AppLayout";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard">
              <Route index element={<Navigate replace to={"analytics"} />} />
              <Route path="analytics" element={<DashboardAnalytics />} />
              <Route path="students" element={<DashboardStudents />} />
            </Route>
            <Route path="rooms" element={<Rooms />} />
            <Route path="attendance" element={<Attendence />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="maintanance" element={<Maintanance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
