import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPReview } from "components/ui/";
const HomeReviews = (props) => {
  const { data } = props;

  return (
    <Box>
      <MPReview item={data.reviews[0]} />
    </Box>
  );
};

HomeReviews.propTypes = {};

export default HomeReviews;
