import { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import TestScreen from './components/TestScreen';
import ResultScreen from './components/ResultScreen';
import HistoryScreen from './components/HistoryScreen';
import './App.css';

export default function App() {
  const [screen, setScreen] = useState('start');
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('studyTypeHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  function handleTestComplete(typeKey) {
    const newResult = { type: typeKey, date: new Date().toISOString() };
    const newHistory = [newResult, ...history];

    setCurrentResult(newResult);
    setHistory(newHistory);
    localStorage.setItem('studyTypeHistory', JSON.stringify(newHistory));
    setScreen('result');
  }

  function handleViewResult(result) {
    setCurrentResult(result);
    setScreen('result');
  }

  return (
    <div className="app">
      {screen === 'start' && <StartScreen onStart={() => setScreen('test')} />}

      {screen === 'test' && (
        <TestScreen
          onComplete={handleTestComplete}
          onBack={() => setScreen('start')}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          result={currentResult}
          onRetake={() => setScreen('test')}
          onHistory={() => setScreen('history')}
          onHome={() => setScreen('start')}
        />
      )}

      {screen === 'history' && (
        <HistoryScreen
          history={history}
          onBack={() => setScreen('start')}
          onViewResult={handleViewResult}
        />
      )}
    </div>
  );
}