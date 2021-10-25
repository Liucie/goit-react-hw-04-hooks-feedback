// import s from './App.css';
import React, { useState } from 'react';
import SectionTitle from './components/SectionTitle/SectionTitle';
import { Statistics } from './components/Statistics/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCounter = e => {
    const name = e.target.name;

    if (name === 'good') {
      setGood(good + 1);
    }
    if (name === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (name === 'bad') {
      setBad(bad + 1);
    }
  };
  const totalFeedback = () => {
    return good + neutral + bad;
  };
  const positiveFeedbackPercentage = () => {
    return Math.round(((good + neutral) / totalFeedback()) * 100);
  };

  return (
    <div className="App">
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleCounter}
        ></FeedbackOptions>
      </SectionTitle>
      <SectionTitle title="Statistics">
        {totalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </SectionTitle>
    </div>
  );
}

export default App;
