const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <b>Total of {totalExercises}</b>
    </p>
  );
};

export default Total;
