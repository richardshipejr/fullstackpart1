import { useState } from "react";

import Title from "./components/Title";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [rating, setRating] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
    allRating: 0,
  });

  const handleGoodRating = () => {
    const newRating = {
      ...rating,
      good: rating.good + 1,
      allRating: rating.allRating + 1,
    };
    setRating(newRating);
  };

  const handleBadRating = () => {
    const newRating = {
      ...rating,
      bad: rating.bad + 1,
      allRating: rating.allRating + 1,
    };
    setRating(newRating);
  };

  const handleNeutralRating = () => {
    const newRating = {
      ...rating,
      neutral: rating.neutral + 1,
      allRating: rating.allRating + 1,
    };
    setRating(newRating);
  };

  return (
    <div>
      <Title title="give feedback" />
      <p>
        <Button buttonText="good" onClick={handleGoodRating} />
        <Button buttonText="neutral" onClick={handleNeutralRating} />
        <Button buttonText="bad" onClick={handleBadRating} />
      </p>
      <Title title="Statistics" />
      <Statistics data={rating} />
    </div>
  );
};

export default App;
