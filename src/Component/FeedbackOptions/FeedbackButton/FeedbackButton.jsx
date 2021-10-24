import PropTypes from 'prop-types';

import css from 'Component/FeedbackOptions/FeedbackButton/FeedbackButton.module.css';

export const FeedbackButton = ({ feedback, clickFeedback }) => {
  return (
    <li className={css.item}>
      <button
        className={css[feedback]}
        type="button"
        data-feedback={feedback}
        onClick={clickFeedback}
      >
        {feedback}
      </button>
    </li>
  );
};

FeedbackButton.propTypes = {
  feedback: PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired,
  clickFeedback: PropTypes.func.isRequired,
};
