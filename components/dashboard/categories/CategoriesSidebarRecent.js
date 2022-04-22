import {} from "react";
import PropTypes from "prop-types";
import {
  Box,
  styled,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListSubheader,
  Divider,
} from "@mui/material";

const CategoriesSidebarRecentStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  alignItems: "flex-end",
}));

const CategoriesSidebarRecent = (props) => {
  const { recentCategories } = props;

  return (
    <CategoriesSidebarRecentStyled>
      <List
        sx={{ width: "100%", maxWidth: 420 }}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Recent Categories
          </ListSubheader>
        }
      >
        {recentCategories.map((category, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt={`${category.name}`} src={`${category.cover.url}`} />
            </ListItemAvatar>
            <ListItemText
              primary={category.name}
              secondary={category.updatedAt}
            />
          </ListItem>
        ))}
      </List>
    </CategoriesSidebarRecentStyled>
  );
};

CategoriesSidebarRecent.propTypes = {};

export default CategoriesSidebarRecent;
