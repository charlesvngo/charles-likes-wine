import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface props {
  list: string[];
  type: string;
}

const WineListItem = (props: props) => {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="redwine-list-subheader">
          {props.type}
        </ListSubheader>
      }
    >
      {props.list.map((listItem) => {
        return (
          <ListItemButton>
            <ListItemText primary={listItem} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default WineListItem;
