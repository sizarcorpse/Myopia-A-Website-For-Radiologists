import { Box, Switch, Typography, Container } from "@mui/material";

const NavigationHeader = (props) => {
  const { platform, handleChange } = props;
  return (
    <Box sx={{ backgroundColor: platform ? "primary.dark" : "primary.main" }}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          minHeight: "50px",
        }}
      >
        <Typography variant="body2" color="primary.light">
          patient
        </Typography>
        <Switch checked={platform} onChange={handleChange} />
        <Typography variant="body2" color="primary.light">
          practitioner
        </Typography>
      </Container>
    </Box>
  );
};

export default NavigationHeader;
