import { Box, Switch, createTheme } from '@mui/material';
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const handleChange = () => {
    setTheme((lastTheme) => {
      return lastTheme === lightTheme ? darkTheme : lightTheme;
    });
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Switch onChange={handleChange}></Switch>
    </Box>
  );
}

export default App;
