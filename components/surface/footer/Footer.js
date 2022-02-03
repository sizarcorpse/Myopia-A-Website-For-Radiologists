import {} from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  styled,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MPAddressItem, MPSocial } from "components/ui";
import { mockFooter } from "mocks/";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
const FooterStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  backgroundColor: "rgba(45, 54, 99,1)",
}));

const ListItemsStyed = styled(Stack)(({ theme }) => ({
  "& a": {
    textDecoration: "none",
    maxWidth: "max-content",
  },
}));

const ListItems = ({ items, dir, spacing, wrap }) => {
  return (
    <ListItemsStyed
      spacing={1}
      direction={dir ? dir : "column"}
      spacing={spacing ? spacing : 1}
      sx={{ flexWrap: wrap ? "wrap" : "nowrap" }}
      justifyContent="center"
    >
      {items.map((item, index) => (
        <Link href={item.url.path} key={index}>
          <a>
            <Typography variant="body2" component="p" color="primary.light">
              {item.title}
            </Typography>
          </a>
        </Link>
      ))}
    </ListItemsStyed>
  );
};

const Addresses = ({ item: { phone, fax, email, address } }) => {
  return (
    <Stack spacing={1}>
      <MPAddressItem
        icon={<LocalPhoneIcon />}
        label={phone.label}
        value={phone.value}
        type="tel"
        variant="small"
        color="light"
      />
      <MPAddressItem
        icon={<MailIcon />}
        label={email.label}
        value={email.value}
        type="tel"
        variant="small"
        color="light"
      />
      <MPAddressItem
        icon={<LocationOnIcon />}
        label={address}
        type="tel"
        variant="small"
        color="light"
      />
    </Stack>
  );
};

const Footer = (props) => {
  const {} = props;
  const {
    about,
    patient,
    practitioner,
    contact: { locations },
    rights,
  } = mockFooter;
  const [one, two] = locations;
  const matchesSM = useMediaQuery(useTheme().breakpoints.down("sm"));
  const matchesMD = useMediaQuery(useTheme().breakpoints.down("md"));
  const matchesLG = useMediaQuery(`(max-width: 980px)`);

  return (
    <FooterStyled>
      <Container>
        <Grid container spacing={4}>
          <Grid item xxs={12} xs={12} sm={12} md={4}>
            <Link href="/">
              <a>
                <Typography
                  variant="h3"
                  color="primary.light"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "28px !important",
                    mb: 4,
                  }}
                >
                  MYOPIA
                </Typography>
              </a>
            </Link>
            <Typography
              variant="body2"
              color="primary.light"
              sx={{ maxWidth: "41ch" }}
            >
              {about.description}
            </Typography>
          </Grid>
          <Grid item xxs={12} xs={6} sm={6} md={2.5}>
            <Typography
              variant="caption"
              component="p"
              color="primary.light"
              sx={{ mb: 4 }}
            >
              {patient.title}
            </Typography>
            <ListItems items={patient.links} />
            <Typography
              variant="caption"
              component="p"
              color="primary.light"
              sx={{ mb: 4, mt: 4 }}
            >
              {patient.book.title}
            </Typography>
            <ListItems items={patient.book.links} />
          </Grid>
          <Grid item xxs={12} xs={6} sm={6} md={2.5}>
            <Typography
              variant="caption"
              component="p"
              color="primary.light"
              sx={{ mb: 4 }}
            >
              {practitioner.title}
            </Typography>
            <ListItems items={practitioner.links} />
            <Typography
              variant="caption"
              component="p"
              color="primary.light"
              sx={{ mb: 4, mt: 4 }}
            >
              {practitioner.start.title}
            </Typography>
            <ListItems items={practitioner.start.links} />
          </Grid>
          <Grid
            item
            xxs={12}
            xs={12}
            sm={12}
            md={3}
            sx={{
              display: matchesMD && "flex",
              flexDirection: matchesSM && "column",
              gap: matchesSM && 4,
            }}
          >
            <Box sx={{ flexBasis: `calc(50%)` }}>
              <Typography
                variant="caption"
                component="p"
                color="primary.light"
                sx={{ mb: 4 }}
              >
                Contact Us
              </Typography>
              <Addresses item={one.information} />
            </Box>
            <Box
              sx={{
                flexBasis: matchesMD && `calc(50%)`,
                pl: matchesSM ? "0px" : matchesMD ? "16px" : "0px",
              }}
            >
              <Typography
                variant="caption"
                component="p"
                color="primary.light"
                sx={{ mb: 4, mt: matchesMD ? 0 : 4 }}
              >
                Social
              </Typography>
              <MPSocial />
            </Box>
          </Grid>
          <Grid item xxs={12} xs={12} sm={12} md={12}>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: matchesLG && "center",
                gap: matchesLG && 2,
                mt: 4,
                flexDirection: matchesLG && "column",
              }}
            >
              <Typography variant="body2" component="p" color="primary.light">
                💀{new Date().getFullYear() + `  `}
                {rights.title}
              </Typography>
              <ListItems items={rights.links} dir="row" spacing={3} wrap />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterStyled>
  );
};

Footer.propTypes = {};

export default Footer;
