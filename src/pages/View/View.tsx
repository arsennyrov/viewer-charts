import { useState } from 'react';
import Charts from "../../features/Charts";
import { DatePicker } from "antd";

import "./View.css";
import { dataSource } from "../../data";
import moment from 'moment';
import { useAppSelector } from '../../app/hooks';
import { selectCharts } from '../../features/Charts/chartsSlice';

const { RangePicker } = DatePicker;

type DateRange = [moment.Moment | null, moment.Moment | null] | null

function View() {
  const charts = useAppSelector(selectCharts);

  const [period, setPeriod] = useState<DateRange>()

  const realCharts = dataSource.filter(item => {
    if (!period) return true
    if (period[0] && period[1] ) {
      return period[0].startOf('month').diff(moment(item.date), 'month') <= 0 && period[1].startOf('month').diff(moment(item.date), 'month') >= 0
    }
    if (period[0]) {
      return period[0].startOf('month').diff(moment(item.date), 'month') <= 0
    }
    return true
  })

  return (
    <div className='view__main'>
      {!charts.length && <div className="view__alert">Добавтье график</div>}
      {!!charts.length && <div className="view__range-wrapper">
        <RangePicker
          picker="month"
          onCalendarChange={(value) => setPeriod(value)}
        />
      </div>}
      <Charts chartHeight="600px" grid={false} dataSource={realCharts} />
    </div>
  );
}

export default View;
