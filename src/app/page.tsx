"use client";

import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import styles from "./page.module.css";
import { darkTheme, lightTheme } from "@/theme";
import UserForm from "@/components/templates/user-form";

export default function Home() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = prefersDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>V.I Form</h1>
        </div>
        <UserForm />
      </main>
    </ThemeProvider>
  );
}
