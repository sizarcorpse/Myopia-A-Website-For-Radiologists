import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, Divider, Typography } from "@mui/material";
import { MPButton, MPButtonGroup } from "components/ui";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const CategoriesHeaderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

const CategoriesHeader = (props) => {
  const { catId, mode, title, status, isFormValueChange } = props;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const handlePublished = async () => {
    try {
      const r = await fetch(`/api/category/${catId}/publish`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const rd = await r.json();

      if (rd.status === "success") {
        router.push(`/dashboard/categories/`);
        enqueueSnackbar("Category created successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category create failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Category published failed", { variant: "error" });
    }
  };

  const handleDraft = async () => {
    try {
      const r = await fetch(`/api/category/${catId}/draft`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const rd = await r.json();

      if (rd.status === "success") {
        router.push(`/dashboard/categories/`);
        enqueueSnackbar("Category created successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category create failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Category Draft failed", { variant: "error" });
    }
  };

  const handleDelete = async () => {
    try {
      const r = await fetch(`/api/category/${catId}`, {
        method: "DELETE",
      });
      const rd = await r.json();

      if (rd.status === "success") {
        router.push(`/dashboard/categories/`);
        enqueueSnackbar("Category deleted successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Category deleted failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Category deleted failed", { variant: "error" });
    }
  };

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
              handle={handlePublished}
              disabled={!catId}
            >
              Published
            </MPButton>
          )}

          {mode === "edit" && status === "published" && (
            <MPButton
              variant="light"
              icon={<DraftsIcon />}
              handle={handleDraft}
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
                handle={handleDelete}
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
