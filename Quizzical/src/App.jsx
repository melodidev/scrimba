import React from "react"

import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Quiz from "./components/Quiz"

export default function App() {
  let [url, setUrl] = React.useState();
  let [quizData, setQuizData] = React.useState();
  let [isFetchingData, setIsFetchingData] = React.useState(false);

  React.useEffect(function() {
    if (!url) return;
    setIsFetchingData(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setQuizData(decodeData(data.results));
        setIsFetchingData(false);
      })
  }, [url])

  function decodeData(results) {
    return results.map(result => ({
      "question": atob(result.question),
      "type": atob(result.type),
      "correct_answer": atob(result.correct_answer),
      "incorrect_answers": result.incorrect_answers.map(answer => atob(answer)),
    }))
  }

  function getFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData).toString();
    setUrl("https://opentdb.com/api.php?amount=5&encode=base64&" + params);
  }

  function resetData() {
    setQuizData();
    setUrl();
  }

  return (
    <main>
      {quizData && <Navbar />}
      <div className="container">
        {quizData ? (
          <Quiz data={quizData} resetData={resetData}/>
        ) : (
          <Form handleSubmit={getFormData} isFetchingData={isFetchingData} />
        )}
      </div>
    </main>
  )
}