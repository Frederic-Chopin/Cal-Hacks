import './App.css';
import * as React from 'react';
import MainPage from './MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route Path="https://phase-time.com/" component={MainPage} exact></Route>
        <Route component={Error}></Route>
      </Switch>
    </main>
  )
}

export default App