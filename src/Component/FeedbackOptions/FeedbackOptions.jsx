import PropTypes from 'prop-types';

import { FeedbackButton } from 'Component/FeedbackOptions/FeedbackButton';

import css from 'Component/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, clickFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <FeedbackButton
          key={option.id}
          feedback={option.name}
          clickFeedback={clickFeedback}
        />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  clickFeedback: PropTypes.func.isRequired,
};
