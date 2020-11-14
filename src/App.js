import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';
import SwipeCards from './Components/SwipeCards/SwipeCards';
import Questions from './Components/Questions/Questions';


const alanKey = '1baae52035175029c4614b20f384fde12e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if(command === 'testCommand') {
                    alert('Hello')
                }
            }
        })
    }, []);

  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/ask">
            <Header  backbutton="/" />
            <Questions />
          </Route>
          <Route path="/">
            <Header/>
            <SwipeCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
