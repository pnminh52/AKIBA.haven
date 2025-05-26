import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page/user/homepage";
import UserLayout from "./layout/UserLayout";
import FigureDetails from "./page/user/FigureDetails";
import FigureList from "./page/user/FigureList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Homepage />} />
        <Route path="details/:name" element={<FigureDetails />} />
        <Route path="list" element={<FigureList />} />

      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
