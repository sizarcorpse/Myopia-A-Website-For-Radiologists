import PropTypes from "prop-types";
import {
  Box,
  styled,
  Typography,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import Image from "next/image";
import capitalize from "lodash/capitalize";
import EditIcon from "@mui/icons-material/Edit";
import PublishIcon from "@mui/icons-material/Publish";
import DraftsIcon from "@mui/icons-material/Drafts";
import DeleteIcon from "@mui/icons-material/Delete";

const MPCategoryCardStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: 280,
  position: "relative",
  borderRadius: theme.spacing(1),
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
  "& > .nextImage span": {
    borderRadius: theme.spacing(1, 1, 0, 0),
  },
}));
const MPCategoryCardStatusStyled = styled(Box)(({ theme, status }) => ({
  backgroundColor: status === "published" ? "#00897B" : "#FB8C00",
  width: "max-content",
  padding: theme.spacing(0.5, 2.5),
  borderRadius: theme.spacing(5),
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2),
  "& p": {
    color: "#fff",
  },
}));
const MPCategoryCardContentStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(0.5),
}));
const MPCategoryCardActionsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(2),
  justifyContent: "space-evenly",
  "& button": {
    color: theme.palette.primary.lightish,
    transition: "all 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const MPCategoryCard = (props) => {
  const {
    item: { _id, name, status, cover },
  } = props;

  return (
    <MPCategoryCardStyled>
      <Box className="nextImage">
        <Image
          src={cover.url}
          alt={name}
          width={280}
          height={157.5}
          objectFit="cover"
        />
      </Box>
      <MPCategoryCardStatusStyled status={status}>
        <Typography variant="body1" component="p">
          {capitalize(status)}
        </Typography>
      </MPCategoryCardStatusStyled>
      <MPCategoryCardContentStyled>
        <Typography
          variant="h7"
          color="primary.dark"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>

        <Typography variant="body2" color="primary.lightish">
          {_id}
        </Typography>
      </MPCategoryCardContentStyled>
      <MPCategoryCardActionsStyled>
        <Tooltip title="Edit Category">
          <IconButton size="small">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Divider orientation="vertical" flexItem />
        {status === "published" && (
          <Tooltip title="Draft Category">
            <IconButton size="small">
              <DraftsIcon />
            </IconButton>
          </Tooltip>
        )}
        {status === "draft" && (
          <Tooltip title="Published Category">
            <IconButton size="small">
              <PublishIcon />
            </IconButton>
          </Tooltip>
        )}
        <Divider orientation="vertical" flexItem />
        <Tooltip title="Delete Category">
          <IconButton size="small">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </MPCategoryCardActionsStyled>
    </MPCategoryCardStyled>
  );
};

MPCategoryCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    cover: PropTypes.shape({
      url: PropTypes.string.isRequired,
      public_id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MPCategoryCard;
