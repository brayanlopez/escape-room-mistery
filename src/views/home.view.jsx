import { Typography } from "@mui/material";

const HomeView = ({ principalText }) => {
  return (
    <>
      <Typography variant="h1">{principalText}</Typography>
      <Typography variant="body1" sx={{ color: "green" }}>
        "¡Oh, por supuesto! ¡Increíblemente impresionante! Realmente has
        alcanzado la cima de tus capacidades al lograrlo... o al menos eso
        intentas hacernos creer!"
      </Typography>
    </>
  );
};

export default HomeView;
