import { useState } from "react";
import { Box, styled, Grid, Container, Tabs, Tab } from "@mui/material";
import { MPProfileCard } from "components/ui";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const MainContentAreaStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const ProfileSurface = (props) => {
  const { children, uInfo, isOwner = false } = props;
  const router = useRouter();
  const { data: session, status } = useSession();

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
              <Tabs value={0} left="true">
                {isOwner && (
                  <Tab
                    label="Profile Update"
                    onClick={() =>
                      router.push(`/u/${session.user.username}/update`)
                    }
                  />
                )}
                <Tab
                  label="Activities"
                  onClick={() => router.push(`/u/${session.user.username}`)}
                />
              </Tabs>
              <MainContentAreaStyled> {children}</MainContentAreaStyled>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

ProfileSurface.propTypes = {};

export default ProfileSurface;
