import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  InputBase,
  useTheme,
  Button,
  Typography,
} from "@mui/material";
import { useMetamask, useAddress } from "@thirdweb-dev/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import token from "../assets/ethereum.png";
import ethereum from "../assets/token.png";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { connect, address } = useStateContext();
  console.log(address);
  return (
    <AppBar
      sx={{
        background: "none",
        boxShadow: "none",
        position: "static",
        mt: "1rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          component={"img"}
          src={token}
          sx={{
            objectFit: "contain",
            width: "4rem",
            height: "4rem",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "14px",
            background: theme.palette.primary[700],
            padding: "0.3rem 1.5rem",
            marginLeft: "1rem",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{
              width: "25vw",
            }}
          />
          <SearchOutlinedIcon
            sx={{
              color: theme.palette.secondary["A100"],
            }}
          />
        </Box>
        <Box
          mr="3rem"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <button
            className="btn"
            style={{
              backgroundImage: `linear-gradient(to bottom right,${theme.palette.secondary["A400"]}, ${theme.palette.tertiary["A200"]})`,
              color: theme.palette.primary[100],
              padding: "0.5rem 1.5rem",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => (address ? navigate("/create-campaign") : connect())}
          >
            <Typography
              fontFamily={"sans-serif"}
              fontWeight="600"
              fontSize={"1.5em"}
            >{`${address ? "Create campaign" : "Connect"}`}</Typography>
          </button>
          <img
            src={ethereum}
            style={{
              backgroundColor: theme.palette.primary[800],
              width: "51px",
              height: "51px",
              objectFit: "contain",

              borderRadius: "10px",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
