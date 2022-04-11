import PropTypes from "prop-types";
import { MPHeroTitle, MPHero, MPButtonGroup } from "components/ui";
import { Button, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const LoginHeroStyled = styled(Button)(({ theme }) => ({
  appearance: "none",
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  height: theme.spacing(6),
  padding: theme.spacing(0, 2),
  fontSize: "1em",
  lineHeight: 1,
  textAlign: "center",
  textDecoration: "none",
  textTransform: "none",
  color: "#fff",
  cursor: "pointer",
  border: 0,
  borderRadius: 6,
  backgroundImage:
    "radial-gradient(100% 100% at 100% 0, #5adaff 0, #0383C7 100%)",
  boxShadow: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
  transition: `box-shadow .15s,transform .15s`,
  willChange: "box-shadow,transform",

  "&:hover": {
    boxShadow: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #2D3663 0 -3px 0 inset`,
    transform: "translateY(2px)",
  },
  "&:active": {
    boxShadow: `#2D3663 0 3px 7px inset`,
    transform: "translateY(2px)",
  },
  "& svg": {
    fontSize: "1.5em",
    fill: "radial-gradient(100% 100% at 100% 0, #5adaff 0, #0383C7 100%)",
  },
}));

const LoginHero = (props) => {
  const {
    data: {
      title,
      description,
      background: { desktop, mobile },
    },
    providers,
    signIn,
  } = props;

  return (
    <MPHero
      backgroundImageForDesktop={desktop}
      backgroundImageForMobile={mobile}
      backgroundImagePosition="center"
    >
      <MPHeroTitle heroTitle={title} heroDescription={description} />
      <MPButtonGroup>
        {Object.values(providers).map((provider) => {
          if (provider.name === "name") {
            return;
          }
          return (
            <LoginHeroStyled
              key={provider.name}
              startIcon={<GitHubIcon />}
              onClick={() => signIn(provider.id)}
              className="loginButton"
            >
              Login with GitHub
            </LoginHeroStyled>
          );
        })}
      </MPButtonGroup>
    </MPHero>
  );
};

LoginHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default LoginHero;
