import React, { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import HighChart from "./HighChart";

interface Props {
  isLoading: boolean;
  error: any;
  difficultyData: Array<Array<any>>;
  onFetchDifficultyData: Function;
}

const dataSource = {
  title: {
    text: "Microsoft and Apple stock chart",
  },
  rangeSelector: {
    selected: 4,
  },
  yAxis: {
    labels: ["MSFT", "AAPL"],
    plotLines: [
      {
        value: 0,
        width: 2,
        color: "silver",
      },
    ],
  },
  plotOptions: {
    series: {
      compare: "percent",
      showInNavigator: true,
    },
  },

  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
    valueDecimals: 2,
    split: true,
  },
  seriesCounter: 0,
  names: ["MSFT", "AAPL"],
  series: [
    {
      name: "MSFT",
      data: [[]],
    },
    {
      name: "AAPL",
      data: [[]],
    },
  ],
};

const Difficulty: React.FC<Props> = ({
  isLoading,
  error,
  difficultyData,
  onFetchDifficultyData,
}) => {
  useEffect(() => {
    onFetchDifficultyData();
  }, []);

  if (isLoading) return <Loader />;

  if (error) return <Error error={error} />;

  if (difficultyData.length) {
    dataSource.series[0].data = difficultyData[0];
    dataSource.series[1].data = difficultyData[1];
  }

  return <HighChart type="stockChart" options={dataSource} />;
};
export default Difficulty;
