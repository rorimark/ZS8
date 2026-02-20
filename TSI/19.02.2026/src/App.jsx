import "./App.css";
import Hangman0 from "./assets/Hangman-0.png";
import Hangman1 from "./assets/Hangman-1.png";
import Hangman2 from "./assets/Hangman-2.png";
import Hangman3 from "./assets/Hangman-3.png";
import Hangman4 from "./assets/Hangman-4.png";
import Hangman5 from "./assets/Hangman-5.png";
import Hangman6 from "./assets/Hangman-6.png";
import { useState, useEffect, useCallback, useRef } from "react";
import { Hangman } from "./components/Hangman";
import { LetterPlaceholder } from "./components/LetterPlaceholder";
import { words } from "./data/words";

const App = () => {
  const [errorsCount, setErrorsCount] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState("");

  const getRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  }, []);

  useEffect(() => {
    setWordToGuess(getRandomWord());
  }, [getRandomWord]);

  useEffect(() => {
    if (wordToGuess.includes("-")) {
      setGuessedLetters((prev) => [...prev, "-"]);
    }
    if (wordToGuess.includes(" ")) {
      setGuessedLetters((prev) => [...prev, " "]);
    }
  }, [wordToGuess]);

  const hasShownWinAlert = useRef(false);
  const hasShownLoseAlert = useRef(false);

  const images = [
    Hangman0,
    Hangman1,
    Hangman2,
    Hangman3,
    Hangman4,
    Hangman5,
    Hangman6,
  ];

  const topRow = "QWERTYUIOP".split("");
  const middleRow = "ASDFGHJKL".split("");
  const bottomRow = "ZXCVBNM".split("");

  const isGameWon =
    wordToGuess &&
    wordToGuess.split("").every((letter) => guessedLetters.includes(letter));
  const isGameOver = wordToGuess && errorsCount >= 6;

  useEffect(() => {
    if (
      wordToGuess &&
      isGameWon &&
      !hasShownWinAlert.current &&
      !hasShownLoseAlert.current
    ) {
      hasShownWinAlert.current = true;
      setTimeout(() => {
        alert("Congratulations! You won!");
      }, 200);
    }
  }, [isGameWon, wordToGuess]);

  useEffect(() => {
    if (
      wordToGuess &&
      isGameOver &&
      !hasShownLoseAlert.current &&
      !hasShownWinAlert.current
    ) {
      hasShownLoseAlert.current = true;
      setTimeout(() => {
        alert(`Game Over! The word was: ${wordToGuess}`);
      }, 200);
    }
  }, [isGameOver, wordToGuess]);

  const onLetterClick = useCallback(
    (letter) => {
      if (isGameOver || isGameWon || clickedLetters.includes(letter)) return;
      if (!wordToGuess.includes(letter)) {
        setErrorsCount((prev) => prev + 1);
        setClickedLetters((prev) => [...prev, letter]);
      } else {
        setGuessedLetters((prev) => [...prev, letter]);
        setClickedLetters((prev) => [...prev, letter]);
      }
    },
    [isGameOver, isGameWon, clickedLetters, wordToGuess],
  );

  const onReset = () => {
    setErrorsCount(0);
    setGuessedLetters([]);
    setClickedLetters([]);
    setWordToGuess(getRandomWord());
    hasShownWinAlert.current = false;
    hasShownLoseAlert.current = false;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        isGameOver ||
        isGameWon ||
        clickedLetters.includes(event.key.toUpperCase())
      )
        return;
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
      )
        return;
      if (!event.code.startsWith("Key")) return;

      const letter = event.code.slice(3);
      if (!event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
      }

      onLetterClick(letter);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isGameOver, isGameWon, clickedLetters, onLetterClick]);

  return (
    <>
      <h1>Hangman</h1>
      <p>Errors count: {errorsCount}</p>
      <Hangman images={images} errorsCount={errorsCount} />
      <div className="answer-container">
        {[...wordToGuess].map((letter, index) => (
          <span key={index} className="letter-placeholder">
            <LetterPlaceholder
              letter={letter}
              isVisible={guessedLetters.includes(letter)}
              isGameOver={isGameOver}
              isGameWon={isGameWon}
            />
          </span>
        ))}
      </div>
      <div className="keyboard">
        <div className="keyboard-row">
          {topRow.map((letter) => (
            <button
              key={letter}
              className={`letter-button ${
                clickedLetters.includes(letter) &&
                guessedLetters.includes(letter)
                  ? "letter-guessed"
                  : ""
              }`}
              onClick={() => onLetterClick(letter)}
              disabled={
                !guessedLetters.includes(letter) &&
                clickedLetters.includes(letter)
              }
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="keyboard-row">
          {middleRow.map((letter) => (
            <button
              key={letter}
              className={`letter-button ${
                clickedLetters.includes(letter) &&
                guessedLetters.includes(letter)
                  ? "letter-guessed"
                  : ""
              }`}
              onClick={() => onLetterClick(letter)}
              disabled={
                !guessedLetters.includes(letter) &&
                clickedLetters.includes(letter)
              }
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="keyboard-row">
          {bottomRow.map((letter) => (
            <button
              key={letter}
              className={`letter-button ${
                clickedLetters.includes(letter) &&
                guessedLetters.includes(letter)
                  ? "letter-guessed"
                  : ""
              }`}
              onClick={() => onLetterClick(letter)}
              disabled={
                !guessedLetters.includes(letter) &&
                clickedLetters.includes(letter)
              }
            >
              {letter}
            </button>
          ))}
        </div>
        <button className="letter-button reset-button" onClick={onReset}>
          New Word
        </button>
      </div>
    </>
  );
};

export default App;
