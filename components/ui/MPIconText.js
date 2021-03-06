import {} from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Box, styled, Typography } from "@mui/material";

const MpIconTextStyled = styled(Box)(
  ({ theme, variant, alignItems, alignItemsOnMobile }) => ({
    display: "flex",
    flexDirection: variant,
    justifyContent: "flex-start",
    alignItems: alignItems,
    gap: theme.spacing(2),
    maxWidth: "768px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: variant === "row" ? "column" : "column",
      alignItems: alignItemsOnMobile ? alignItemsOnMobile : alignItems,
      justifyContent: alignItemsOnMobile,
    },

    "& .image": {
      flex: "1 0 calc(91px - 16px)",
    },
    "& .contents": {
      flex: "1 1 calc(100% - 107px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: alignItems,
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        alignItems: alignItemsOnMobile ? alignItemsOnMobile : alignItems,
      },

      "& p": {
        textAlign: alignItems ? alignItems : "left",
        [theme.breakpoints.down("sm")]: {
          textAlign: alignItemsOnMobile ? alignItemsOnMobile : alignItems,
        },
      },
    },
  })
);

const MPIconText = (props) => {
  const {
    item: { icon, title, description },
    variant,
    alignItems,
    alignItemsOnMobile,
  } = props;

  return (
    <MpIconTextStyled
      variant={variant}
      alignItems={alignItems}
      alignItemsOnMobile={alignItemsOnMobile}
    >
      {icon && (
        <Box className="image">
          <Image
            src={icon}
            alt={title}
            width={75}
            height={75}
            quality={100}
            priority={true}
          />
        </Box>
      )}
      <Box className="contents">
        <Typography variant="h6" color="primary.dark" component="p">
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" color="primary.dark">
            {description}
          </Typography>
        )}
      </Box>
    </MpIconTextStyled>
  );
};

MPIconText.defaultProps = {
  variant: "column",
  alignItems: "flex-start",
  alignItemsOnMobile: "flex-start",
};

MPIconText.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  variant: PropTypes.oneOf(["column", "row"]),
  alignItems: PropTypes.oneOf(["flex-start", "center"]),
  alignItemsOnMobile: PropTypes.oneOf(["flex-start", "center"]),
};

export default MPIconText;
