import Link from "next/link";
import { styled, Typography, Stack } from "@mui/material";

const StackStyled = styled(Stack)(({ theme }) => ({
  "& p": {
    textDecoration: "none",
    cursor: "pointer",
  },
}));

const PatientNavigation = (props) => {
  const { items } = props;

  return (
    <StackStyled direction="row" alignItems="center" gap={4}>
      {items.map((item, index) => (
        <Link href={item.url.path} key={index}>
          <Typography variant="h6" component="p" color="primary.light">
            {item.title}
          </Typography>
        </Link>
      ))}
    </StackStyled>
  );
};

export default PatientNavigation;
