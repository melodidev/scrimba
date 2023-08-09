import React from "react"

export default function Quiz(props) {
  let [userAnswers, setUserAnswers] = React.useState();

  const correctAnswers = props.data.map(item => item.correct_answer);

  function getAnswers(data) {
    let answers = [...data.incorrect_answers, data.correct_answer].sort();
    if (data.type === "boolean") answers.reverse();
    return answers;
  }

  function checkAnswers(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    setUserAnswers([...formData.values()]);
  }

  function markAnswers(currentAnswer, i) {
    if (!userAnswers) return "btn-outline-primary";
    let userAnswer = userAnswers[i];
    let correctAnswer = correctAnswers[i];

    let buttonStyle;
    if (correctAnswer == currentAnswer) {
      buttonStyle = "btn-outline-success";
    } else if (userAnswer == currentAnswer && userAnswer != correctAnswer) {
      buttonStyle = "btn-outline-danger";
    } else {
      buttonStyle = "btn-outline-primary";
    }
    return buttonStyle;
  }

  function countCorrectAnswers() {
    let count = 0;
    userAnswers.forEach((userAnswer, i) => {
      if (userAnswer == correctAnswers[i]) count++;
    })
    return count;
  }

  return (
    <form onSubmit={checkAnswers} className="mt-4 pb-5">
      {props.data.map((data, i) =>
        <div className="border-bottom pb-3 mb-3" key={i}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">{data.question}</div>
            {userAnswers &&
              <div>
                {userAnswers[i] === correctAnswers[i] ? "✔️" : "❌"}
              </div>
            }
          </div>

          <div className="d-flex gap-3">
            {getAnswers(data).map((answer, j) =>
              <div className="mt-2 mb-1" key={j}>
                <input
                  type="radio"
                  className="btn-check"
                  name={i}
                  id={`answer-${i}-${j}`}
                  value={answer}
                />
                <label
                  className={`btn btn-sm ${markAnswers(answer, i)}`}
                  htmlFor={`answer-${i}-${j}`}
                >
                  {answer}
                </label>
              </div>
            )}
          </div>
        </div>
      )}
      {userAnswers ? (
        <div className="d-flex justify-content-between align-items-center">
          <div className="fw-bold fs-4">You scored {countCorrectAnswers()}/5 correct answers</div>
          <button
            type="button"
            className="btn btn-primary px-4 py-2"
            onClick={props.resetData}
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary mt-2 px-4 py-2"
          >
            Check Answers
          </button>
        </div>
      )}
    </form>
  )
}
