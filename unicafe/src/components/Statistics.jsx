import StatisticLine from "./StatisticLine";
const Statistics = ({ data }) => {
  const average =
    (data.bad * -1 + data.good * 1 + data.neutral * 0) / data.allRating;
  const positive = (data.good / data.allRating) * 100;

  //   const averageScore = () => {
  //     const good = data.good;
  //     const bad = data.bad * -1;
  //     const neutral = data.neutral * 0;

  //     if (all === 0) return 0; // Prevent division by zero

  //     const average = (good + bad + neutral) / all;
  //     return average;
  //   };
  if (data.allRating === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={data.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={data.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={data.bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={data.allRating} />
          </tr>
          <tr>
            <StatisticLine text="average" value={average} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={positive + " %"} />
          </tr>
        </tbody>
      </table>
      {/* <ul>
        <StatisticLine text="all" value={data.allRating} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
      </ul> */}
    </>
  );
};

export default Statistics;
