import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  styled,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MPAccordionStyled = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  margin: "0 auto",
}));

const MPAccordionRootStyled = styled(Accordion)(({ theme }) => ({
  "& .MuiAccordionSummary-root": {
    minHeight: 70,
    padding: theme.spacing(0, 3),
  },
  "& .MuiAccordionDetails-root": {
    padding: theme.spacing(1, 3, 2),
  },
}));

const MPAccordion = (props) => {
  const { items } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <MPAccordionStyled>
      {items.map((item, i) => (
        <MPAccordionRootStyled
          key={i}
          expanded={expanded === `panel1${item.id}`}
          onChange={handleChange(`panel1${item.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              color="primary.dark"
              style={{ fontWeight: 400 }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="primary.dark">
              {item.content}
            </Typography>
          </AccordionDetails>
        </MPAccordionRootStyled>
      ))}
    </MPAccordionStyled>
  );
};

MPAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MPAccordion;
