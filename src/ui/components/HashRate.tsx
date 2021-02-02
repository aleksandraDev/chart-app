import React, { useEffect } from "react";
import Loader from "./Loader";
import HighChart from "./HighChart";

interface Props {
  isLoading: boolean;
  error: any;
  hashRateData: Array<Array<any>>;
  fetchHashRateData: Function;
}

const dataSource = {
  title: {
    text: "Apple and Google stock chart",
  },
  rangeSelector: {
    selected: 4,
  },
  yAxis: {
    labels: ["AAPL", "GOOG"],
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
  names: ["AAPL", "GOOG"],
  series: [
    {
      name: "AAPL",
      data: [[]],
    },
    {
      name: "GOOG",
      data: [[]],
    },
  ],
};

const HashRate: React.FC<Props> = ({
  isLoading,
  error,
  hashRateData,
  fetchHashRateData,
}) => {
  useEffect(() => {
    fetchHashRateData();
  }, []);

  if (isLoading) return <Loader />;

  if (error)
    return <div>Oops! An error occured while fetching the data ...</div>;

  if (hashRateData.length) {
    dataSource.series[0].data = hashRateData[0];
    dataSource.series[1].data = hashRateData[1];
  }

  return <HighChart type="stockChart" options={dataSource} />;
};

export default HashRate;
