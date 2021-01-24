import React from 'react';
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area
} from './../../../../components/recharts';

import Risk from '../../../../lib/Risk';

import colors from './../../../../colors';
import moment from "moment";

const data = [
  {name: '2020/11/01', critical: 4000, high: 2400, medium: 2400, low: 1000, info: 1000},
  {name: '2020/11/02', critical: 3000, high: 1398, medium: 2210, low: 1000, info: 1000},
  {name: '2020/11/03', critical: 2000, high: 9800, medium: 2290, low: 1000, info: 1000},
  {name: '2020/11/04', critical: 2780, high: 3908, medium: 2000, low: 1000, info: 1000},
  {name: '2020/11/05', critical: 1890, high: 4800, medium: 2181, low: 1000, info: 1000},
  {name: '2020/11/06', critical: 2390, high: 3800, medium: 2500, low: 1000, info: 1000},
  {name: '2020/11/07', critical: 3490, high: 4300, medium: 2100, low: 1000, info: 1000},
];

const riskLabelFormatter = (item) => {
  return moment(item, 'YYYY/MM/DD').format('MMMM DD, YYYY');
};

const StackedAreaChart = () => (
    <ResponsiveContainer width='100%' aspect={6.0}>
      <AreaChart data={data}
                 margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip labelFormatter={riskLabelFormatter} itemSorter={(item) => -Risk.valueByName(item.name)} />
        <Area dataKey='info' stackId="1" stroke={colors['info-risk-alt']} fill={colors['info-risk-alt-05']}/>
        <Area dataKey='low' stackId="1" stroke={colors['low-risk-alt']} fill={colors['low-risk-alt-05']}/>
        <Area dataKey='medium' stackId="1" stroke={colors['medium-risk-alt']} fill={colors['medium-risk-alt-05']}/>
        <Area dataKey='high' stackId="1" stroke={colors['high-risk-alt']} fill={colors['high-risk-alt-05']}/>
        <Area dataKey='critical' stackId="1" stroke={colors['critical-risk-alt']} fill={colors['critical-risk-alt-05']}/>
      </AreaChart>
    </ResponsiveContainer>
);

export {StackedAreaChart};
