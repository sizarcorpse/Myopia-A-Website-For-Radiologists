import {} from "react";
import PropTypes from "prop-types";
import { Box, styled, Grid, Container } from "@mui/material";
import { MPProfileCard } from "components/ui";
const ProfileSurface = (props) => {
  const { children, uInfo } = props;

  return (
    <Grid container component="main">
      <Grid
        item
        xs={12}
        sx={{
          height: "220px",
          backgroundImage: "url(/assets/root/Profile-Cover-Photo.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xxs={12} sm={12} md={5} lg={4}>
              <MPProfileCard item={uInfo} />
            </Grid>
            <Grid item xxs={12} sm={12} md={7} lg={8}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

ProfileSurface.propTypes = {};

export default ProfileSurface;
