import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Departments from "./pages/Departments";
import DepartmentsDetails from "./pages/DepartmentsDetails";
import SidebarLayout from "./layouts/SidebarLayout";
import Machines from "./pages/Machines";
import TopPanel from "./layouts/TopPanel";
import Scheme from "./components/Scheme";
import Parameters from "./components/Parameters";

function App() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="dashboard" element={<SidebarLayout />}>
        <Route index element={<Departments />}></Route>
        <Route path="departments/:id" element={<DepartmentsDetails />} />
        <Route path="machines" element={<Machines />} />
        <Route path="machine" element={<TopPanel />}>
          <Route element={<Parameters />} path="">
            <Route element={<Scheme />} index />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<h1>Страница не найдена</h1>} />
    </Routes>
  );
}

export default App;
