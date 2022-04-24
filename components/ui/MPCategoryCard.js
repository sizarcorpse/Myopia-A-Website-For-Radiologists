import PropTypes from "prop-types";
import { useRouter } from "next/router";
import {
  Box,
  styled,
  Typography,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { useCategory } from "contexts/CategoryContext";
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
    mutateCategories,
    dataWillMutate,
  } = props;
  const router = useRouter();
  const {
    handlePublishedAndMutate,
    handleDraftAndMutate,
    handleDeleteAndMutate,
  } = useCategory();

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
        <Typography variant="body2" component="p">
          {capitalize(status)}
        </Typography>
      </MPCategoryCardStatusStyled>
      <MPCategoryCardContentStyled>
        <Typography
          variant="h7"
          component="h2"
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
          <IconButton
            size="small"
            onClick={() => {
              router.push(`/dashboard/categories/${_id}`);
            }}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Divider orientation="vertical" flexItem />
        {status === "published" && (
          <Tooltip title="Draft Category">
            <IconButton
              size="small"
              onClick={() => {
                handleDraftAndMutate(_id, mutateCategories);
              }}
            >
              <DraftsIcon />
            </IconButton>
          </Tooltip>
        )}
        {status === "draft" && (
          <Tooltip title="Published Category">
            <IconButton
              size="small"
              onClick={() => {
                handlePublishedAndMutate(_id, mutateCategories);
              }}
            >
              <PublishIcon />
            </IconButton>
          </Tooltip>
        )}
        <Divider orientation="vertical" flexItem />
        <Tooltip title="Delete Category">
          <IconButton
            size="small"
            onClick={() => {
              handleDeleteAndMutate(_id, mutateCategories, dataWillMutate);
            }}
          >
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
    mutateCategories: PropTypes.func.isRequired,
  }).isRequired,
};

export default MPCategoryCard;
