const Progress = ({ index, numQuestions, points, maxPoint, answer }) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question:{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>
          {points} / {maxPoint}
        </strong>
      </p>
    </header>
  );
};

export default Progress;
