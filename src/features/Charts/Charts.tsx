import { FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useAppSelector } from "../../app/hooks";
import { selectCharts } from "./chartsSlice";

import "./Charts.css";
import { IData } from "../../data";

function getOptions(type: string, color: string[], height: string, dataSource: IData[]) {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: type,
      height: height,
    },
    colors: color,
    title: false,
    series: [
      {
        data: dataSource,
        enableMouseTracking: false,
      },
    ],
    credits: {
      enabled: false,
    },
  };
}

interface IChart {
  chartHeight: string;
  grid: boolean;
  activeId?: string;
  onActiveIdChange?: (activeId?: string) => void;
  dataSource: IData[];
}

const Chart: FC<IChart> = ({ chartHeight, grid, activeId, onActiveIdChange, dataSource }) => {
  const charts = useAppSelector(selectCharts);

  return (
    <div className="charts">
      <div className={`${grid ? "charts__grid" : "charts__wrapper"}`}>
        {charts.map((item) => {
          return (
            <div
              className={`charts__chart-wrapper ${
                item.id === activeId ? "charts__chart-active" : ""
              }`}
              key={item.id}
              onClick={() => {
                onActiveIdChange?.(item.id);
              }}
            >
              <HighchartsReact
                highcharts={Highcharts}
                options={getOptions(item.type, item.color, chartHeight, dataSource)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
