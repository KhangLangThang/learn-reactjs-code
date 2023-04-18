import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValue = props.pointData.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.pointData.map((data) => (
        <ChartBar
          key={data.id}
          value={data.value}
          maxVaule={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
}
export default Chart;
