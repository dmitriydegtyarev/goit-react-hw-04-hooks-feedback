import { useState } from 'react';

import { Container } from 'Component/Container';
import { Section } from 'Component/Section/Section';
import { FeedbackOptions } from 'Component/FeedbackOptions';
import { Notification } from 'Component/Notification';
import { Statistics } from 'Component/Statistics';

import options from 'data/typeFeedback.json';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickFeedback = ({ target }) => {
    const { feedback } = target.dataset;

    switch (feedback) {
      case 'good':
        return setGood(state => state + 1);
      case 'neutral':
        return setNeutral(state => state + 1);
      case 'bad':
        return setBad(state => state + 1);
      default:
        return feedback;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage =
      ((good / totalFeedback) * 100).toFixed() + ' %';
    return totalFeedback ? positiveFeedbackPercentage : 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} clickFeedback={clickFeedback} />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};
