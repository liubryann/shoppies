import React from 'react';
import './App.css';
// Theme
import { 
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core'; 
import themeObj from './util/theme'; 
// Redux 
import { Provider } from 'react-redux';
import store from './app/store'; 
// Components

// Pages
import Landing from './pages/Landing';

const theme = createMuiTheme(themeObj); 

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Landing />
        </Provider>
      </ThemeProvider>
  );
}

export default App;
