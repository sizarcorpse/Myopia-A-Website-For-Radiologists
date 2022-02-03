import { cloneElement } from "react";
import Link from "next/link";
import { Box, styled, IconButton, Tooltip } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

let socials = [
  {
    platform: "github",
    url: "https://github.com/sizarcorpse",
    title: "github.com/sizarcorpse",
    component: <GitHubIcon color="primary.blue" />,
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/ramizimran/",
    title: "linkedin.com/in/ramizimran",
    component: <LinkedInIcon />,
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/sizarcorpse",
    title: "facebook.com/sizarcorpse",
    component: <FacebookIcon />,
  },
  {
    platform: "twitter",
    url: "https://twitter.com/sizarcorpse",
    title: "twitter.com/sizarcorpse",
    component: <TwitterIcon />,
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/sizarcorpse/",
    title: "instagram.com/sizarcorpse",
    component: <InstagramIcon />,
  },
];

const MPSocial = () => {
  return (
    <Box className="MpSocial" sx={{ display: "flex", gap: 2 }}>
      {socials.map((social, index) => (
        <Link href={social.url} key={index}>
          <a target="_blank">
            <Tooltip title={social.title} placement="top" key={index}>
              <IconButton sx={{ p: 0 }}>
                {cloneElement(social.component, {
                  fontSize: "small",
                  sx: { color: "#fff" },
                })}
              </IconButton>
            </Tooltip>
          </a>
        </Link>
      ))}
    </Box>
  );
};

export default MPSocial;
