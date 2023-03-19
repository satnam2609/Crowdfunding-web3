import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import FormField from "../components/FormField";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { checkIfImage } from "../utils";
import Loader from "../components/Loader";
const CreateCampaign = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  if (isLoading) {
    //isLoading
    return (
      <Box
        sx={{
          marginTop: "8%",
          marginLeft: "25%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
        <Typography
          fontSize={"2em"}
          fontWeight="600"
          color={theme.palette.primary[300]}
          marginLeft="11rem"
          marginTop="2%"
        >
          Transaction in process...
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary[800],
        p: "1rem",
        marginLeft: "6em",
        display: "flex",
        justifyContent: "center",
        width: "80%",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "11px",
        gap: "2rem",
      }}
    >
      {isLoading && <Loader />}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={"2em"}
          fontWeight={"700"}
          color={theme.palette.primary[300]}
          sx={{
            borderRadius: "10px",
            p: "1rem",
            backgroundColor: theme.palette.primary[700],
          }}
        >
          Start a Campaign
        </Typography>
      </Box>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          margin: "15px 0rem",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            flexDirection: "row",
          }}
        >
          <FormField
            label="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            label="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </Box>

        <FormField
          label="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <Typography
          fontSize={"2em"}
          fontWeight={"700"}
          sx={{
            backgroundColor: theme.palette.tertiary["A200"],
            p: "2rem 4rem",
            color: theme.palette.primary[300],
            borderRadius: "10px",
            width: "100%",
          }}
        >
          You will get 100% of the raised amount
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "1rem",
            // width: "100%",
            flexWrap: "wrap",
          }}
        >
          <FormField
            label="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            label="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </Box>
        <FormField
          label="Campaign image *"
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />

        <button
          type="submit"
          style={{
            backgroundColor: theme.palette.tertiary["A200"],
            padding: "1rem 3rem ",
            mt: "1rem",
            color: theme.palette.primary[300],
            fontWeight: "400",
            borderRadius: "10px",
            cursor: "pointer",
            border: `2px solid ${theme.palette.primary[800]}`,
          }}
        >
          Submit new campaign
        </button>
      </form>
    </Box>
  );
};

export default CreateCampaign;
