import React, { useEffect, useState } from "react";
import notes from "./CodingNotes.md";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#282c34",
    },
    mode: "light",
  },
});

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function App() {
  const [notesText, setNotesText] = useState("");
  useEffect(() => {
    fetch(notes)
      .then((res) => res.text())
      .then((text) => setNotesText(text));
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <header>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            <Item></Item>
            <Item>
              <ReactMarkdown children={notesText} />
            </Item>
          </Box>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
