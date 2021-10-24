import PropTypes from 'prop-types';

import css from 'Component/Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        Good: <span className={css.itemFeedback}>{good}</span>
      </li>
      <li className={css.item}>
        Neutral: <span className={css.itemFeedback}>{neutral}</span>
      </li>
      <li className={css.item}>
        Bad: <span className={css.itemFeedback}>{bad}</span>
      </li>
      <li className={css.item}>
        Total: <span className={css.itemFeedback}>{totalFeedback}</span>
      </li>
      <li className={css.item}>
        Positive Percantage:{' '}
        <span className={css.itemFeedback}>{positiveFeedbackPercentage}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.string.isRequired,
};
