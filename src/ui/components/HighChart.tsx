import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

interface Props {
  type: string;
  options: any;
}

const HighChart: React.FC<Props> = ({ type, options }) => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={type}
      options={options}
    />
  </div>
);

export default HighChart;
