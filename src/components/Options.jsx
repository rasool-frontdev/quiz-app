const Options = ({ question, answer, dispatch }) => {
  const hasAnsered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer && "answer"} ${
            hasAnsered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnsered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
