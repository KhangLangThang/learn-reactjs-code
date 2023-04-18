import "./ChartBar.css";
function ChartBar(props) {
  let fillChartBar = "0%";
  if (props.maxVaule > 0) {
    fillChartBar = Math.round(props.value / props.maxVaule) * 100 + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillChartBar }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
export default ChartBar;
