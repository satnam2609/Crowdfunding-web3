import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import DisplayCampaigns from "../components/DisplayCampaigns";
import Loader from "../components/Loader";
import { useStateContext } from "../context";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    // const notDoneData = data.map((campaign) => campaign.deadline);
    // console.log(notDoneData);
    setCampaigns(data);
    setIsLoading(false);
  };
  const campaignDeadline = campaigns.map((data) => data.deadline);
  console.log(new Date().getDate());
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);
  if (isLoading) {
    //isLoading
    return <Loader />;
  }
  return (
    <div>
      <DisplayCampaigns
        campaigns={campaigns}
        isLoading={isLoading}
        title={"All Campaigns"}
      />
    </div>
  );
};

export default Home;
