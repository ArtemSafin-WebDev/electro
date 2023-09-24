import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Departments from "./pages/Departments";
import DepartmentsDetails from "./pages/DepartmentsDetails";
import SidebarLayout from "./layouts/SidebarLayout";

function App() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="dashboard" element={<SidebarLayout />}>
        <Route index element={<Departments />}></Route>
        <Route path="departments/:id" element={<DepartmentsDetails />} />
      </Route>
      <Route path="*" element={<h1>Страница не найдена</h1>} />
    </Routes>
  );
}

export default App;
