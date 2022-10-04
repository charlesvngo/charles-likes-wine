import { useState } from "react";

import {
  TextField,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import WineBarRoundedIcon from "@mui/icons-material/WineBarRounded";

import WineList from "./WineList";

const pages = ["On Sale", "Shop", "Explore", "Learn"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface props {}

const TopNav = (props: props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [drawer, setDrawer] = useState();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (event: any) => {
    setDrawer(event.target.value);
  };

  return (
    <Box>
      <AppBar position="static" color="inherit">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo and Site name */}
            <WineBarRoundedIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CLW
            </Typography>

            {/* Nav Items */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={toggleDrawer}
                  value={page}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Search Field */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{ my: 2, color: "white", display: "block" }}
              />
            </Box>

            {/* User items */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Drawer for list items */}
      {drawer && (
        <Box sx={{ backgroundColor: "white" }}>
          <WineList></WineList>
        </Box>
      )}
    </Box>
  );
};
export default TopNav;
