import { Box, Icon, InputBase, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import token from "../assets/token.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useStateContext } from "../context";
import Loader from "../components/Loader";
import { daysLeft } from "../utils";
const DetailedCampaign = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { address, contract } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const { donate, getDonations } = useStateContext();
  const [donators, setDonators] = useState([]);
  const [amount, setAmount] = useState();
  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonators(data);
  };
  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  console.log(donators);

  const handleDonate = async () => {
    setIsLoading(true);
    await donate(state.pId, amount);
    navigate("/");
    setIsLoading(false);
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
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        columnGap: "1.33%",
        rowGap: "2%",
        justifyContent: "space-around",
        mt: "1rem",
        mr: "2rem",
        ml: "6em",
        width: "100%",
        mb: "2.2rem",
      }}
    >
      <Box
        component={"img"}
        src={state.image}
        sx={{
          color: "white",
          objectFit: "cover",
          width: "69vw",
          height: "55vh",
          backgroundColor: theme.palette.secondary[400],
          gridColumn: "span 4",
          gridRow: "span 2",
          borderRadius: "10px",
        }}
      />
      <Box
        sx={{
          backgroundColor: theme.palette.primary[800],
          gridColumn: "span 1",
          gridRow: "span 1",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
            color: theme.palette.secondary["A200"],
            textAlign: "center",
            mt: "2.8rem",
            alignSelf: "center",
          }}
        >
          {state.amountCollected}
        </Box>

        <Box
          sx={{
            fontSize: "1.3rem",
            color: theme.palette.primary[400],
            textAlign: "center",
            backgroundColor: theme.palette.primary[700],
            p: "1rem 0",
          }}
        >
          Raised of {state.target} ETH
        </Box>
      </Box>
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: theme.palette.primary[800],
          gridColumn: "span 1",
          gridRow: "span 1",

          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
            color: theme.palette.secondary["A200"],
            textAlign: "center",
            mt: "2.8rem",
            alignSelf: "center",
          }}
        >
          {daysLeft(state.deadline)}
        </Box>

        <Box
          sx={{
            fontSize: "1.3rem",
            color: theme.palette.primary[400],
            textAlign: "center",
            backgroundColor: theme.palette.primary[700],
            p: "1rem 0",
          }}
        >
          Days Left
        </Box>
      </Box>
      <Box
        sx={{
          color: "white",
          fontSize: "2em",
          backgroundColor: theme.palette.primary[900],
          borderRadius: "10px",
          gridColumn: "span 3",
          gridRow: "span 2",
          // p: "8rem 0",
        }}
      >
        <Box
          sx={{
            ml: "1rem",
            mt: "1rem",
            mb: "1rem",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            fontSize={"0.7em"}
            fontWeight="600"
            sx={{
              alignSelf: "start",
            }}
          >
            CREATOR
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              gap: "1.5rem",
            }}
          >
            <Box
              component={"img"}
              sx={{
                objectFit: "contain",
                width: "3.3rem",
                borderRadius: "50%",
                backgroundColor: theme.palette.primary[700],
              }}
              src={token}
            />
            <Typography
              fontSize={"0.5em"}
              fontWeight="600"
              sx={{
                alignSelf: "center",
              }}
            >
              {state.owner}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "1.3rem",
            }}
          >
            <Typography
              fontSize={"0.7em"}
              fontWeight="600"
              sx={{
                alignSelf: "start",
              }}
            >
              STORY
            </Typography>

            <Typography
              fontSize={"1rem"}
              color={theme.palette.primary[500]}
              fontWeight="400"
              sx={{
                alignSelf: "start",
              }}
            >
              {state.description}
            </Typography>
          </Box>
          {/* DONATORS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            <Typography
              fontSize={"0.7em"}
              fontWeight="600"
              sx={{
                alignSelf: "start",
              }}
            >
              DONATORS
            </Typography>

            {donators.length > 0 ? (
              donators.map((data, index) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      gap: "0.8rem",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "1rem",
                        color: theme.palette.primary[300],
                      }}
                    >{`${index}. ${data.donator}`}</Box>
                    <Box
                      sx={{
                        fontSize: "1rem",
                        mr: "1rem",
                        color: theme.palette.primary[400],
                      }}
                    >{`${data.donation} ETH`}</Box>
                  </Box>
                );
              })
            ) : (
              <Box>
                <Typography
                  fontSize={"1rem"}
                  fontWeight="400"
                  sx={{
                    alignSelf: "start",
                    color: theme.palette.primary[500],
                  }}
                >
                  No donators yet. Be the first one!
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {/* FUND */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary[800],
          borderRadius: "10px",
          gridColumn: "span 2",
          gridRow: "span 3",
        }}
      >
        <Box
          sx={{
            mt: "0.8rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            fontFamily={"sans-serif"}
            fontSize="1.8em"
            color={theme.palette.primary[300]}
            fontWeight="600"
            sx={{
              alignSelf: "flex-start",
              textAlign: "left",
              marginLeft: "1em",
            }}
          >
            Fund
          </Typography>
          <input
            type={"number"}
            className="input"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              backgroundColor: theme.palette.primary[800],
              fontSize: "1.3em",
            }}
            placeholder="0.1 ETH"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme.palette.primary[900],
              p: "1rem",
              width: "95%",
              borderRadius: "10px",
              gap: "1.4rem",
            }}
          >
            <Typography
              fontFamily={"sans-serif"}
              fontSize="1.8em"
              color={theme.palette.primary[300]}
              fontWeight="600"
              sx={{
                alignSelf: "flex-start",
                textAlign: "left",
              }}
            >
              Back it because you believe in it.
            </Typography>

            <Typography
              fontFamily={"sans-serif"}
              fontSize="1.8em"
              color={theme.palette.primary[600]}
              fontWeight="300"
              sx={{
                textAlign: "left",
              }}
            >
              Support the project for no reward, just because it speaks to you.
            </Typography>
          </Box>

          <button
            type="button"
            onClick={handleDonate}
            style={{
              backgroundColor: theme.palette.tertiary["A400"],
              width: "95%",
              padding: "1rem 6rem ",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1.4em",
              fontWeight: "500",
              color: theme.palette.primary[300],
            }}
          >
            Fund Campaign
          </button>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailedCampaign;
