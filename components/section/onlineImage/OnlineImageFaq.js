import {} from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { MPAccordion } from "components/ui";

const OnlineImageFaqStyled = styled(Box)(({ theme }) => ({}));

const OnlineImageFaq = (props) => {
  const { data } = props;

  return (
    <OnlineImageFaqStyled>
      <MPAccordion items={data} />
    </OnlineImageFaqStyled>
  );
};

OnlineImageFaq.propTypes = {};

export default OnlineImageFaq;
