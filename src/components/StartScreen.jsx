const StartScreen = ({ numQuestions }) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button>Let&apos;s Start</button>
    </div>
  );
};

export default StartScreen;
