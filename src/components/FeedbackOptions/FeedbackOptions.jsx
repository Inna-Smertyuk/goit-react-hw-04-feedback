import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.btnBox}>
      <button className={s.button} name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={s.button} name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={s.button} name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
