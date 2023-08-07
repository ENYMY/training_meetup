import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router";
import AllMeetupPage from "./pages/AllMeetup";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<AllMeetupPage />} path='/' />
        <Route element={<NewMeetupPage />} path='/new-meetup' />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
