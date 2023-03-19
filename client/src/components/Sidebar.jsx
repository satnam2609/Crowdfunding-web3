import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, IconButton, Toolbar, useTheme } from "@mui/material";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import token from "../assets/ethereum.png";

const Sidebar = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const Icon = [
    {
      name: "/",
      icon: (
        <HomeOutlinedIcon
          sx={{
            color:
              pathname === name
                ? theme.palette.tertiary["A400"]
                : theme.palette.secondary["A100"],
            fontSize: "2rem",
          }}
        />
      ),
    },
    {
      name: "/create-campaign",
      icon: (
        <CampaignOutlinedIcon
          sx={{
            color: theme.palette.secondary["A100"],
            fontSize: "2rem",
          }}
        />
      ),
    },
    {
      name: "/my-payments",
      icon: (
        <PaidOutlinedIcon
          sx={{
            color: theme.palette.secondary["A100"],
            fontSize: "2rem",
          }}
        />
      ),
    },
    {},
  ];
  return (
    <Box
      sx={{
        mt: "3rem",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: theme.palette.primary[800],
          height: "75vh",
          width: "5vw",
          borderRadius: "15px",
          ml: "1.2rem",
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box>
          {Icon.map((object) => {
            return (
              <IconButton
                sx={{
                  mb: "0.5rem",
                  mt: "0.5rem",
                  backgroundColor:
                    pathname === object.name
                      ? theme.palette.primary[700]
                      : "transparent",
                  borderRadius: "10px",
                }}
                onClick={() => navigate(object.name)}
              >
                {object.icon}
              </IconButton>
            );
          })}
        </Box>

        <Box>
          <IconButton>
            <LightModeOutlinedIcon
              sx={{
                color: theme.palette.secondary["A100"],
                fontSize: "2rem",
                mb: "1rem",
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Sidebar;
