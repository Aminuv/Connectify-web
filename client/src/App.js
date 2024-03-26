import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scens/homePage";
import ProfilePage from "scens/profilePage";
import LoginPage from "scens/loginPage";


// Yhe root component of the application. 
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
