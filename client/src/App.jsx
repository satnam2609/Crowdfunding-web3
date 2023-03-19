import React, { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider, CssBaseline, Typography, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import DetailedCampaign from "./pages/DetailedCampaign";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings()));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Navbar />
        <Box
          sx={{
            // marginLeft: "7rem",
            display: "flex",
            // marginBottom: "4rem",
            flexDirection: "row",

            gap: "6em",
          }}
        >
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route
              path="/campaign-details/:id"
              element={<DetailedCampaign />}
            />
          </Routes>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
