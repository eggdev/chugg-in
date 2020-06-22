import React, { useEffect } from "react";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import useDarkMode from "../hooks/useDarkMode";
const useStyles = makeStyles((theme) => ({
  applicationContainer: {
    position: "relative",
    minHeight: "100vh",
    minWidth: "100vw",
    maxWidth: "100vw",
    overflowX: "hidden",
    overflowY: "hidden",
    padding: theme.spacing(2),
  },
}));

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const { muiTheme } = useDarkMode();
  const { applicationContainer } = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box className={applicationContainer}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
