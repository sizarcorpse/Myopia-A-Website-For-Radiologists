import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, useTheme, useMediaQuery } from "@mui/material";
import { MPReview, MPTitle, MPSlider } from "components/ui/";

const HomeReviewsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(10),
  // padding: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(6),
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(4),
  },
  "& .contents": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(4),
    maxWidth: "100%",
  },
}));

const BoxGridStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gap: theme.spacing(4),
  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
  gridAutoRows: "auto",
}));

const HomeReviews = (props) => {
  const { data } = props;
  const matchesSM = useMediaQuery("(max-width: 816px)");
  return (
    <HomeReviewsStyled>
      <MPTitle title={data.title} subtitle={data.subtitle} alignment="center" />
      <Box className="contents">
        {matchesSM ? (
          <MPSlider
            items={data.reviews}
            mpComponent={<MPReview />}
            gutter={1}
          />
        ) : (
          <BoxGridStyled>
            {data.reviews.map((item, index) => (
              <MPReview key={index} item={item} />
            ))}
          </BoxGridStyled>
        )}
      </Box>
    </HomeReviewsStyled>
  );
};

HomeReviews.propTypes = {};

export default HomeReviews;
