import PropTypes from "prop-types";
import { Box, styled, Divider, Typography } from "@mui/material";
import { MPButton, MPButtonGroup } from "components/ui";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useCategory } from "contexts/CategoryContext";

const CategoriesHeaderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

const CategoriesHeader = (props) => {
  const { catId, mode, title, status, isFormValueChange } = props;
  const { handlePublished, handleDraft, handleDelete } = useCategory();

  return (
    <CategoriesHeaderStyled>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h9" color="primary.dark">
          {title}
        </Typography>
        <MPButtonGroup justifyContent="flex-end">
          {mode === "home" && (
            <MPButton
              goto={"/dashboard/categories/new"}
              variant="lightish"
              icon={<CreateIcon />}
            >
              Create An Category
            </MPButton>
          )}

          {(mode === "create" || status === "draft") && (
            <MPButton
              variant="published"
              icon={<PublishIcon />}
              handle={() => handlePublished(catId)}
              disabled={!catId}
            >
              Published
            </MPButton>
          )}

          {mode === "edit" && status === "published" && (
            <MPButton
              variant="light"
              icon={<DraftsIcon />}
              handle={() => handleDraft(catId)}
              disabled={isFormValueChange}
            >
              Draft
            </MPButton>
          )}
          {(mode === "edit" || mode === "create") &&
            (status === "published" || status === "draft") && (
              <MPButton
                variant="reddish"
                icon={<DeleteIcon />}
                handle={() => handleDelete(catId)}
                disabled={isFormValueChange}
              >
                Delete
              </MPButton>
            )}
        </MPButtonGroup>
      </Box>
      <Divider />
    </CategoriesHeaderStyled>
  );
};

CategoriesHeader.propTypes = {
  mode: PropTypes.oneOf(["create", "edit", "home"]),
};

export default CategoriesHeader;
