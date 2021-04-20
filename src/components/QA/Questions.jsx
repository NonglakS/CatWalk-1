import React from 'react';
import Answers from './Answers.jsx';

function Questions({question}) {

  const helpfulButton = {
    border: "none",
    backgroundColor: "white",
    textDecoration: "underline"
  };

  const renderAnswers = function (questionArray) {
    const [answersRendered, setAnswersRendered] = useState(2);
    const [displayedAnswers, setDisplayedAnswers] = useState('');
    const answers = [];
    for (let i = 0; i < answersRendered; i++) {
      if (questionArray[i] === undefined) {
        return;
      }
      answers.push(questionArray[i].answers);
    }
    setAnswersRendered(answersRendered + 2);
    setDisplayedAnswers(answers);
  };

  return (
    <span>
      Q: {question.question_body}
      <p>
        Helpful?
        <button type="submit" style={helpfulButton}> Yes </button>
      </p>
      <Answers answer={question.answers} />
      <button type="submit" onClick={() => renderAnswers(allQuestions.results)}> MORE ANSWERS </button>
      <br />
    </span>
  );
}

export default Questions;
