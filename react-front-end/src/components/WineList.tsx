import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";

const WineList = () => {
  const redWines = [
    "All Red",
    "Cabernet Sauvignon",
    "Pinot Noir",
    "Shiraz",
    "Merlot",
    "Malbec",
    "Syrah",
    "Tempranillo",
    "Zinfandel",
    "Sangiovese",
    "Cabernet Franc",
    "Carmenere",
    "Grenache",
    "Red Blend",
    "Under $20",
    "90+ Points",
  ];

  const whiteWines = [
    "All White",
    "Chardonnay",
    "Sauvignon Blanc",
    "Riesling",
    "Pinot Grigio",
    "Gewurztraminer",
    "Viognier",
    "Pinot Gris",
    "Chenin Blanc",
    "White Blend",
    "Moscato",
    "Semillon",
    "Pinot Blanc",
    "Trebbiano",
    "90+ Points",
    "Under $20",
  ];

  return (
    <>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Red Wines
          </ListSubheader>
        }
      >
        {redWines.map((listItem) => {
          return (
            <ListItemButton>
              <ListItemText primary={listItem} />
            </ListItemButton>
          );
        })}
      </List>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            White Wines
          </ListSubheader>
        }
      >
        {whiteWines.map((listItem) => {
          return (
            <ListItemButton>
              <ListItemText primary={listItem} />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};

export default WineList;
