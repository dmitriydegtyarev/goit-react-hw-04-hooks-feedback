import { Component } from 'react';

import { Container } from 'Component/Container';
import { Section } from 'Component/Section/Section';
import { FeedbackOptions } from 'Component/FeedbackOptions';
import { Notification } from 'Component/Notification';
import { Statistics } from 'Component/Statistics';

import options from 'data/typeFeedback.json';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      ((good / totalFeedback) * 100).toFixed() + ' %';
    return totalFeedback ? positiveFeedbackPercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            clickFeedback={this.clickFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {!totalFeedback ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            ></Statistics>
          )}
        </Section>
      </Container>
    );
  }
}
