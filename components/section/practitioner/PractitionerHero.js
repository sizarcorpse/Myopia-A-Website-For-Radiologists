import {} from "react";
import PropTypes from "prop-types";
import { MPHeroTitle, MPHero, MPButton, MPButtonGroup } from "components/ui";
import AssignmentIcon from "@mui/icons-material/Assignment";
const PractitionerHero = (props) => {
  const {
    data: {
      title,
      description,
      background: { desktop, mobile },
      button,
    },
  } = props;

  return (
    <MPHero
      backgroundImageForDesktop={desktop}
      backgroundImageForMobile={mobile}
      backgroundImagePosition="center center"
    >
      <MPHeroTitle heroTitle={title} heroDescription={description} />

      <MPButton
        goto={button[0].linkTo}
        variant={button[0].variant}
        icon={<AssignmentIcon />}
      >
        {button[0].title}
      </MPButton>
    </MPHero>
  );
};

PractitionerHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default PractitionerHero;
