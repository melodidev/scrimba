import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

  let [dice, setDice] = React.useState(allNewDice());
  let [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    if (dice.every(die => die.isHeld) && dice.every(die => die.value == dice[0].value)) setTenzies(true);
  }, [dice])

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++ ) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  let diceElements = dice.map((die, i) => <Die key={i} id={die.id} value={die.value} isHeld={die.isHeld} handleClick={() => holdDice(die.id)} />);

  function generateNewDie() {
    return {id: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false};
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => !die.isHeld ? generateNewDie() : die))
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => die.id == id ? {...die, isHeld: !die.isHeld} : die ))
  }

  return (
    <main className="rounded mx-lg-auto mx-3 mt-5 p-4 pb-5">
      {tenzies && <Confetti />}
      <div className="fw-semibold fs-3 text-center">Tenzies</div>
      <div className="content text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
      <div className="d-flex justify-content-center my-4">
        <div className="grid">
          {diceElements}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={rollDice} className="bg-purple border-none shadow rounded text-light fs-5 px-4 py-1">{tenzies ? "New Game" : "Roll"}</button>
      </div>
    </main>
  )
}
