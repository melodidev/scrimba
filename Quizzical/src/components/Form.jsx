import React from "react"
import Select from "./Select"

export default function Form(props) {
  let categoryOptions = {
    "9": "General Knowledge",
    "10": "Entertainment: Books",
    "11": "Entertainment: Film",
    "12": "Entertainment: Music",
    "13": "Entertainment: Musicals & Theatres",
    "14": "Entertainment: Television",
    "15": "Entertainment: Video Games",
    "16": "Entertainment: Board Games",
    "17": "Science & Nature",
    "18": "Science: Computer",
    "19": "Science: Mathematics",
    "20": "Mythology",
    "21": "Sports",
    "22": "Geography",
    "23": "History",
    "24": "Politics",
    "25": "Art",
    "26": "Celebrities",
    "27": "Animals",
    "28": "Vehicles",
    "29": "Entertainment: Economics",
    "30": "Science: Gadgets",
    "31": "Entertainment: Japanese Anime & Manga",
    "32": "Entertainment: Cartoon & Animation",
  }
  let difficultyOptions = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  }
  let typeOptions = {
    multiple: "Multiple",
    boolean: "Boolean",
  }
  
  return (
    <div className="d-flex justify-content-center pt-3 pt-lg-5">
      <div>
        <div className="fs-2 fw-bold text-center mt-3 mb-3">Quizzical</div>
        <div className="mb-3">Answer the questions and test your knowledge! ☺️</div>
        <form onSubmit={props.handleSubmit}>
          <Select name="category" label="Category" options={categoryOptions} />
          <Select name="difficulty" label="Difficulty" options={difficultyOptions} />
          <Select name="type" label="Type" options={typeOptions} />
          <div className="d-flex justify-content-center">
            <button
              disabled={props.isFetchingData ? true : false}
              className={`btn btn-primary mt-3 px-4 py-2`}>
              Start Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}