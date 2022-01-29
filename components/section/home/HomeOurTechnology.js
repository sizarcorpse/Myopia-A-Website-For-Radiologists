import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { Box, styled, Typography } from "@mui/material";
import { MPIconText } from "components/ui";

const HomeOurTechnologyStyled = styled(Box)(({ theme }) => ({
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
    gap: theme.spacing(2),

    "& .title": {
      maxWidth: "18ch",
      "& span": {
        color: theme.palette.primary.dark,
      },
    },

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
        flex: "1 1 calc(50% - 16px)",
      },
    },
  },
  "& > .image": {
    flex: "1 1 calc(40% - 16px)",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const HomeOurTechnology = (props) => {
  const { data } = props;

  return (
    <HomeOurTechnologyStyled>
      <Box className="contents">
        <Typography
          variant="h3"
          component="h2"
          className="title"
          color="primary.main"
        >
          {data.title.color1}
          <br></br>
          <span>{data.title.color2}</span>
        </Typography>
        <Typography variant="body1">{data.description}</Typography>

        <Box className="technologies">
          {data.technologies.map((item, index) => (
            <Box key={index} className="item">
              <MPIconText item={item} />
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
    </HomeOurTechnologyStyled>
  );
};

HomeOurTechnology.propTypes = {};

export default HomeOurTechnology;
