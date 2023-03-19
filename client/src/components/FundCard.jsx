import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { daysLeft } from "../utils";

const FundCard = ({
  owner,
  name,
  title,
  description,
  deadline,
  target,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);
  const theme = useTheme();
  return (
    <Box
      component={"div"}
      onClick={handleClick}
      sx={{
        width: "100%",
        borderRadius: "10px",
        backgroundColor: theme.palette.primary[800],
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "160px",
          borderRadius: "10px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "1rem",
        }}
      >
        <Typography fontSize={"1.2em"} color={theme.palette.primary[300]}>
          {title}
        </Typography>
        <Typography
          fontSize={"14px"}
          fontWeight="600"
          color={theme.palette.primary[500]}
        >
          {description}
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ m: "1.7rem 0" }}
        >
          <Box display={"flex"} flexDirection="column">
            <Typography
              fontSize={"14px"}
              fontWeight="600"
              color={theme.palette.tertiary["A400"]}
            >
              {amountCollected} ETH
            </Typography>
            <Typography
              fontSize={"12px"}
              fontWeight="400"
              color={theme.palette.primary[500]}
            >
              Raised of {target} ETH
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Typography
              fontSize={"14px"}
              fontWeight="600"
              color={theme.palette.primary[300]}
            >
              {remainingDays}
            </Typography>
            <Typography
              fontSize={"14px"}
              fontWeight="600"
              color={theme.palette.primary[500]}
            >
              Days Left
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.3rem",
          }}
        >
          <Typography
            fontSize={"14px"}
            fontWeight="600"
            color={theme.palette.primary[500]}
          >
            by
          </Typography>
          <Typography
            fontSize={"14px"}
            fontWeight="600"
            color={theme.palette.secondary["A700"]}
          >
            {owner.slice(0, 28)}...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FundCard;
