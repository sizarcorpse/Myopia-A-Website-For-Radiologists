import {
  Box,
  Switch,
  Typography,
  Container,
  FormControlLabel,
} from "@mui/material";

const NavigationHeader = (props) => {
  const { platform, handleChange } = props;
  return (
    <Box
      sx={{
        backgroundImage: platform
          ? "primary.dark"
          : "radial-gradient(100% 100% at 100% 0, #5adaff 0, #0383C7 100%)",
      }}
    >
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

        <Switch
          checked={platform}
          onChange={handleChange}
          inputProps={{ "aria-label": "switching between platform" }}
        />

        <Typography variant="body2" color="primary.light">
          practitioner
        </Typography>
      </Container>
    </Box>
  );
};

export default NavigationHeader;
