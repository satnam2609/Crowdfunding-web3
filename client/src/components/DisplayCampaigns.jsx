import { useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import FundCard from "./FundCard";
import Loader from "./Loader";

const DisplayCampaigns = ({ campaigns, title, isLoading }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };
  const theme = useTheme();
  return (
    <Box>
      <h1
        style={{
          fontFamily: "Epilogue,'sans-serif'",
          fontWeight: "600",
          fontSize: "18px",
          color: theme.palette.primary[300],
          marginLeft: "3rem",
          textAlign: "left",
        }}
      >
        {title} ({campaigns.length})
      </h1>

      {isLoading && <Loader />}

      {!isLoading && campaigns.length === 0 && (
        <p
          style={{
            fontFamily: "Epilogue,'sans-serif'",
            fontWeight: "600",
            fontSize: "14px",
            color: theme.palette.primary[300],
            lineHeight: "30px",
          }}
          className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]"
        >
          You have not created any campigns yet
        </p>
      )}
      <div
        style={{
          margin: "1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          justifyContent: "space-between",
          rowGap: "20px",
          columnGap: "1.33%",
          "& > div": { gridColumn: "span 4" },
        }}
      >
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </Box>
  );
};

export default DisplayCampaigns;
