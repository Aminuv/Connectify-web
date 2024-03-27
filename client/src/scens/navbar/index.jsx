import { useState } from "react";
import { Box, IconButton, InputBase, Typography, select, MenuItem, FormControl, useMediaQuery } from "@mui/material";
import { Search, Message, DarkMode, LightMode, Notifications, Help, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import { useTheme } from "@emotion/react";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.mode === "dark";
  const background = theme.palette.background.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  // connectify logo
  return (
  <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gqp="1.75rem">
        <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onclick={() => navigate("/home")}
        sx={{
          "&:hover": {
            color: "primary.light",
            cursor: "pointer",
          },
        }}
          >
        Connectify
        </Typography>
        {isNonMobileScreen && (
        <FlexBetween backgroundColor={neutralLight} borderRadius="9px" grp="3rem" padding="0.1rem 1.5rem" >
          <inputBase placeholder="Search" />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>  
        )}
      </FlexBetween>

      {/* desktop nav */}
      {isNonMobileScreen ? (
      <FlexBetween gap="2rem" >
        <IconButton onClick={() => dispatch(setMode)}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px"}}/>
          ) : (
            <LightMode sx={{ color:dark, fontSize: "25px"}}/>
          )}
        </IconButton>
        <Message sx={{ fontSize: "25px"}}/>
        <Notifications sx={{ fontSize: "25px"}}/>
        <Help sx={{ fontSize: "25px"}}/>
        <FormControl variant="standard" value={fullName}>
          <select
            value={fullName}
            sx={{ 
              backgroundColor: neutralLight,
              width: "150px",
              borderRadius: "0.25rem",
              p: "0.25rem 1rem",
              "& .MuiSvgIcon-root": {
                pr: "0.25rem",
                width: "3rem",
              },
              "& .MuiSelect-select:focus": {
                backgroundColor: neutralLight,
              },
            }}
            input={<InputBase />}
          >
            <MenuItem value={fullName}>
              <Typography>{fullName}</Typography>
            </MenuItem>
            <MenuItem onClick={() => dispatch(setLogout)}>Logout</MenuItem>
          </select>
        </FormControl>
      </FlexBetween>
      ) : (
        // mobile menu
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}

      {/*  menu */}
      {!isNonMobileScreen && isMobileMenuToggled && (
        <Box
        position="fixed"
        right="0"
        bottom="0"
        height="100%"
        zIndex="10"
        maxWidth="500px"
        minWidth="300px"
        backgroundColor={background}
        >
          {/* close button */}
          <Box display="flex" justifyContent="flex-end" p="1rem" >
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          {/*  menu items */}
          <FlexBetween
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="3rem"
            >
              <IconButton
                onClick={() => dispatch(setMode())}
                sx={{ fontSize: "25px" }}
              >
                {theme.palette.mode === "dark" ? (
                  <DarkMode sx={{ fontSize: "25px" }} />
                ) : (
                  <LightMode sx={{ color: dark, fontSize: "25px" }} />
                )}
              </IconButton>
              <Message sx={{ fontSize: "25px" }} />
              <Notifications sx={{ fontSize: "25px" }} />
              <Help sx={{ fontSize: "25px" }} />
              <FormControl variant="standard" value={fullName}>
                <select
                  value={fullName}
                  sx={{
                    backgroundColor: neutralLight,
                    width: "150px",
                    borderRadius: "0.25rem",
                    p: "0.25rem 1rem",
                    "& .MuiSvgIcon-root": {
                      pr: "0.25rem",
                      width: "3rem",
                    },
                    "& .MuiSelect-select:focus": {
                      backgroundColor: neutralLight,
                    },
                  }}
                  input={<InputBase />}
                >
                  <MenuItem value={fullName}>
                    <Typography>{fullName}</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(setLogout())}>
                    Log Out
                  </MenuItem>
                </select>
              </FormControl>
            </FlexBetween>
        </Box>
        )}
    </FlexBetween>
  );
};

export default Navbar;