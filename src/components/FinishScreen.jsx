const FinishScreen = ({ points, maxPoint, highscore, dispatch }) => {
  const percentage = (points / maxPoint) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage >= 25 && percentage < 50) emoji = "";
  if (percentage >= 0 && percentage < 25) emoji = "☹";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored{" "}
        <strong>
          {points} out of {maxPoint} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}>
        Restar Quiz
      </button>
    </>
  );
};

export default FinishScreen;
