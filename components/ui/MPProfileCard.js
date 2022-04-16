import { cloneElement } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WorkIcon from "@mui/icons-material/Work";
import Chip from "@mui/material/Chip";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";

const DefaultImageUrl = "/assets/root/Profile-Cover-Photo.svg";

const iconRole = {
  admin: {
    icon: <AdminPanelSettingsIcon />,
    label: "Admin",
    style: {
      background: "#d1263e",
      color: "#fff",
      fill: "white",
    },
  },
  author: {
    icon: <ArticleIcon />,
    label: "Author",
    style: {
      background: "#f5a623",
      color: "#fff",
    },
  },
};

const MpProfileCardStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  maxWidth: "405.33px",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
  alignItems: "center",
  boxShadow:
    "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",

  "& .infoWrapper": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",

    "& .infoWrapper": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      gap: theme.spacing(1),
    },
  },
}));

const NextImageStyles = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: 270,
  maxHeight: 270,
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
  },
  "& > span": {
    display: "block",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
  },
}));

const ProfileNameStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const MuiTextIconStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const MuiTextIcon = (icon, text) => (
  <MuiTextIconStyled>
    {cloneElement(icon, { fontSize: "small" })}
    <Typography variant="body1" color="primary.dark">
      {text}
    </Typography>
  </MuiTextIconStyled>
);

const ProfileName = (name, role) => (
  <ProfileNameStyled>
    <Typography variant="h9" color="primary.dark">
      {name}
    </Typography>
    {role !== "user" && (
      <Chip
        icon={cloneElement(iconRole[role].icon, {
          fontSize: "small",
          sx: {
            fill: "#fcfcfc",
          },
        })}
        label={<Typography variant="body2">{iconRole[role].label}</Typography>}
        sx={{ ...iconRole[role].style }}
      />
    )}
  </ProfileNameStyled>
);

const MpProfileCard = (props) => {
  const { item } = props;
  return (
    <MpProfileCardStyled>
      <NextImageStyles>
        <Image
          src={item.image || DefaultImageUrl}
          width={270}
          height={270}
          objectFit="cover"
          objectPosition="center"
          alt={item.name}
        />
      </NextImageStyles>

      <Box display="flex" flexDirection="column" sx={{ gap: 1 }}>
        {ProfileName(item.name, item.role)}

        <Typography variant="h7" color="primary.dark">
          @{item.username}
        </Typography>

        {item.bio && (
          <Typography variant="body1" color="primary.dark">
            {item.bio}
          </Typography>
        )}

        <Box className="infoWrapper">
          {item.occupation &&
            MuiTextIcon(<WorkIcon color="primary.dark" />, item.occupation)}

          {item.location &&
            MuiTextIcon(<PlaceIcon color="primary.dark" />, item.location)}
          {item.email &&
            MuiTextIcon(<EmailIcon color="primary.dark" />, item.email)}

          {item.website && (
            <MuiTextIconStyled>
              <OpenInNewIcon fontSize="small" color="primary.dark" />
              <Link href={item.website}>
                <a target="_blank" style={{ textDecoration: "none" }}>
                  <Typography variant="body1" color="primary.dark">
                    {item.website}
                  </Typography>
                </a>
              </Link>
            </MuiTextIconStyled>
          )}
        </Box>
      </Box>
    </MpProfileCardStyled>
  );
};

MpProfileCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
    occupation: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default MpProfileCard;
