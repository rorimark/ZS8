const Binary = ({ value }) => {
  return (
    <div className="binary">
      <span className={value[0] === "1" ? "on" : "off"}></span>
      <span className={value[1] === "1" ? "on" : "off"}></span>
      <span className={value[2] === "1" ? "on" : "off"}></span>
      <span className={value[3] === "1" ? "on" : "off"}></span>
      <p>{parseInt(value, 2)}</p>
    </div>
  );
};

export default Binary;
