import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";

const MPReviewStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: theme.spacing(4),
  padding: theme.spacing(4, 4),
  borderRadius: 6,
  backgroundImage: `radial-gradient(100% 100% at 100% 0, #EDF1F6 100%, #EDF1F6 100%)`,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",

  "& .client": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(2),

    "& .clientImage": {
      outline: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "50%",
      width: "100%",
      height: "100%",
      maxWidth: 60,
      maxHeight: 60,
      padding: theme.spacing(0.5),
      "& span": {
        borderRadius: "50%",
      },
    },

    "& .clientName": {
      textAlign: "left",
      "& a": {
        textDecoration: "none",
        color: theme.palette.primary.main,
      },
    },
  },
}));

const MPReview = (props) => {
  const {
    item: {
      companyLogo,
      companyWebsite,
      reviewContent,
      clientName,
      clientPosition,
      clientPhoto,
      clintProfileLink,
    },
  } = props;

  return (
    <MPReviewStyled>
      <Box className="companyImage">
        <Link href={companyWebsite ? companyWebsite : "#"}>
          <a>
            <Image
              src={companyLogo}
              width={137}
              height={35}
              quality={100}
              priority={true}
              alt="company logo"
            />
          </a>
        </Link>
      </Box>
      <Typography
        variant="body1"
        color="primary.dark"
        className="reviewContent"
      >
        {reviewContent}
      </Typography>
      <Box className="client">
        <Box className="clientImage">
          <Image
            src={clientPhoto}
            width={60}
            height={60}
            quality={100}
            alt={clientName}
          />
        </Box>
        <Typography
          variant="caption"
          color="primary.dark"
          className="clientName"
        >
          <Link href={clintProfileLink}>
            <a>{`${clientName} , `}</a>
          </Link>
          <span className="clientPosition">{clientPosition}</span>
        </Typography>
      </Box>
    </MPReviewStyled>
  );
};

MPReview.propTypes = {
  item: PropTypes.shape({
    companyLogo: PropTypes.string,
    companyWebsite: PropTypes.string,
    reviewContent: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientPosition: PropTypes.string.isRequired,
    clientPhoto: PropTypes.string.isRequired,
    clintProfileLink: PropTypes.string,
  }),
};

export default MPReview;
