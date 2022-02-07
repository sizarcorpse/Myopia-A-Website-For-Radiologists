import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import {
  Box,
  styled,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
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

  "& .footerGrid": {
    [theme.breakpoints.up("md")]: {
      width: "auto",
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "700px",
    },
  },
}));

const ListItemsStyed = styled(Stack)(({ theme }) => ({
  "& a": {
    position: "relative",
    textDecoration: "none",
    maxWidth: "max-content",
    margin: "0 0 0 0",
    "& p": {
      transition: "all 250ms ease 0ms",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      width: 10,
      height: "100%",
      background: `url('/assets/root/anchorArrowLight.svg')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: 0,
      transform: "translateX(0%)",
      transition: "all 250ms ease 0ms",
    },
    "&:hover": {
      "& p": {
        color: theme.palette.primary.main,
      },
      "&::after": {
        opacity: 1,
        transform: "translateX(15px)",
      },
    },
  },
}));

const ListItems = ({ items, direction, spacing, wrap }) => {
  return (
    <ListItemsStyed
      direction={direction}
      sx={{ flexWrap: wrap ? "wrap" : "nowrap", gap: spacing ? spacing : 0 }}
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
  return (
    <FooterStyled>
      <Container>
        <Grid container m={{ sm: "auto" }} className="footerGrid">
          <Grid
            item
            xxs={12}
            xs={12}
            sm={12}
            md={4}
            pr={{
              xxs: 0,
              md: 2,
            }}
            mb={{ xxs: 4 }}
          >
            <Link href="/">
              <a>
                <Image
                  src="/assets/root/websiteLogo.svg"
                  alt="myopia"
                  width={160}
                  height={60}
                  priority={true}
                  quality={100}
                />
              </a>
            </Link>
            <Typography
              variant="body2"
              color="primary.light"
              sx={{ maxWidth: "50ch" }}
            >
              {about.description}
            </Typography>
          </Grid>
          <Grid
            item
            xxs={6}
            xs={6}
            sm={6}
            md={2.5}
            pr={{
              xxs: 0,
              md: 2,
            }}
            mb={{ xxs: 4 }}
          >
            <Typography
              variant="caption"
              component="p"
              color="primary.light"
              mb={4}
            >
              {patient.title}
            </Typography>
            <ListItems
              items={patient.links}
              direction="column"
              wrap={true}
              spacing={1}
            />
            <Typography
              variant="caption"
              component="p"
              color="primary.light"
              mt={4}
              sx={{ "& a": { textDecoration: "none", color: "primary.light" } }}
            >
              <Link href={patient.book.url.path}>{patient.book.title}</Link>
            </Typography>
          </Grid>
          <Grid
            item
            xxs={6}
            xs={6}
            sm={6}
            md={2.5}
            pr={{
              xxs: 0,
              md: 2,
            }}
            mb={{ xxs: 4 }}
          >
            <Typography
              variant="caption"
              component="p"
              color="primary.light"
              mb={4}
            >
              {practitioner.title}
            </Typography>
            <ListItems
              items={practitioner.links}
              direction="column"
              wrap={true}
              spacing={1}
            />
          </Grid>
          <Grid item xxs={12} xs={12} sm={12} md={3} mb={{ xxs: 4 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              gap={4}
              flexDirection={{
                xxs: "column",
                sm: "row",
                md: "column",
                lg: "column",
              }}
            >
              <Box flexBasis="50%">
                <Typography
                  variant="caption"
                  component="p"
                  color="primary.light"
                  mb={4}
                >
                  Contact Us
                </Typography>
                <Addresses item={one.information} />
              </Box>
              <Box flexBasis="50%">
                <Typography
                  variant="caption"
                  component="p"
                  color="primary.light"
                  mb={4}
                >
                  Social
                </Typography>
                <MPSocial />
              </Box>
            </Box>
          </Grid>
          <Grid item xxs={12} xs={12} sm={12} md={12}>
            <Divider />
            <Box
              display="flex"
              flexDirection={{ xxs: "column", md: "row" }}
              justifyContent={{ xxs: "center", md: "space-between" }}
              mt={4}
            >
              <Typography
                variant="body2"
                component="p"
                color="primary.light"
                mb={{ xxs: 2 }}
              >
                💀{new Date().getFullYear() + `  `}
                {rights.title}
              </Typography>
              <ListItems
                items={rights.links}
                direction="row"
                spacing={2}
                wrap={true}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterStyled>
  );
};

Footer.propTypes = {};

export default Footer;
