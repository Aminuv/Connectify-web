import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scens/homePage";
import ProfilePage from "scens/profilePage";
import LoginPage from "scens/loginPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { create } from "@mui/material/styles";
import { themeSettings } from "./theme";


// Yhe root component of the application. 
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter >
    </div>
  );
}

export default App;
