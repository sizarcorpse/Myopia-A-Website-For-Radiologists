import PropTypes from "prop-types";
import { MPHeroTitle, MPHero } from "components/ui";

const OnlineImageHero = (props) => {
  const {
    data: {
      title,
      description,
      background: { desktop, mobile },
    },
  } = props;

  return (
    <MPHero
      backgroundImageForDesktop={desktop}
      backgroundImageForMobile={mobile}
      backgroundImagePosition="center"
    >
      <MPHeroTitle heroTitle={title} heroDescription={description} />
    </MPHero>
  );
};

OnlineImageHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default OnlineImageHero;
