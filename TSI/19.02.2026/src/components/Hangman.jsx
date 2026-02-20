const Hangman = ({ images, errorsCount }) => {
  return (
    <div className="hangman">
      <img src={images[errorsCount]} alt="Hangman" />
    </div>
  );
};

export { Hangman };
