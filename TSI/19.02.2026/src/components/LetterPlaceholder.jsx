const LetterPlaceholder = ({
  letter,
  isVisible = false,
  isGameOver = false,
  isGameWon = false,
}) => {
  const showLetter = isGameOver || isGameWon || isVisible;

  // Определяем класс цвета
  let colorClass = "";
  if (isGameOver) colorClass = "letter-placeholder__game-over";
  else if (isGameWon) colorClass = "letter-placeholder__game-won";

  return (
    <span className={`letter-placeholder ${colorClass}`}>
      {showLetter ? letter : "_"}
    </span>
  );
};

export { LetterPlaceholder };
