import {} from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Box, styled, Typography } from "@mui/material";
import { MPButton, MPIconText } from "components/ui";
import MedicationIcon from "@mui/icons-material/Medication";
const PractitionerJoinUsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "932px",
    margin: "0 auto",
    gap: theme.spacing(4),
  },
  "& .contents": {
    flex: "1 1 calc(60% - 16px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(4),

    "& .technologies": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      gap: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: theme.spacing(2),
      },
      "& .item": {
        flex: "0 1 calc(50% - 16px)",
      },
    },
  },
  "& > .image": {
    flex: "1 1 calc(40% - 16px)",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const PractitionerJoinUs = (props) => {
  const { data } = props;

  return (
    <PractitionerJoinUsStyled>
      <Box className="contents">
        <Typography
          variant="h3"
          component="h2"
          className="title"
          color="primary.dark"
        >
          {data.title}
        </Typography>
        <Typography variant="body1">{data.description}</Typography>
        <MPButton
          goto={data.button[0].linkTo}
          variant={data.button[0].variant}
          icon={<MedicationIcon />}
        >
          {data.button[0].title}
        </MPButton>
        <Box className="technologies">
          {data.benefits.map((item, index) => (
            <Box key={index} className="item">
              <MPIconText item={item} alignItemsOnMobile="center" />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="image">
        <Image
          src={data.photo.desktop}
          width={442}
          height={325}
          alt={data.photo.alt}
          quality={100}
          priority={true}
        />
      </Box>
    </PractitionerJoinUsStyled>
  );
};

PractitionerJoinUs.propTypes = {};

export default PractitionerJoinUs;
