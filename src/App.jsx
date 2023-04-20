import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Board from './components/Board';
import Choice from './components/Choice';
import Rules from './components/Rules';
import options from './options';
import Result from './components/Result';
import Results from './Results';

const useStorageState = (keyName, initState) => {
  const [ state, setState ] = useState(JSON.parse(localStorage.getItem(keyName)) ?? initState);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(state));
  }, [state, keyName]);

  return [ state, setState ];
}

const App = () => {
  const [ isShowingRules, setIsShowingRules ] = useState(false);
  const [ pick, setPick ] = useState({ user: {}, computer: {}});
  const [ score, setScore ] = useStorageState('score', 0);

  const handleRulesClick = () => {
    setIsShowingRules(true);
  } 

  const handleCancelClick = () => {
    setIsShowingRules(false)
  }

  const handleUserClick = (item) => {
    const rand = Math.floor(Math.random() * 5);
    setPick({ user: item, computer: options[rand] });
  }

  const handleReplayClick = () => {
    setPick({ user: {}, computer: {} });
  }
  
  const handleScoreChange = (result) => {
    if(result === Results.WIN) setScore(prev => prev + 1);
    if(result === Results.LOSE && score > 0) setScore(prev => prev - 1);
  }

  return (
    <main className="container">
      <Board currentScore={score} />
      {
        (Object.keys(pick.user).length > 0 && Object.keys(pick.computer).length > 0) ?
        <Result 
          pick={pick}
          onScoreChange={handleScoreChange}
          onReplayClick={handleReplayClick}
        /> :
        <Choice 
          options={options}
          onUserClick={handleUserClick}
        />
      } 
      {
        isShowingRules &&
        <Rules 
          onCancelClick={handleCancelClick}
        />
      }
      <button
        className='rules-btn'
        onClick={handleRulesClick}
      >RULES</button>
    </main>
  );
}

export default App;
