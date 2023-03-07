import { useWindowDimensions } from 'hooks/useWindowDimensions';
import {
  BarChart,
  Bar,
  Cell,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import css from './ChartReport.module.css';

const data = [
  {
    description: 'Page A',
    price: 4000,
  },
  {
    description: 'Page B',
    price: 3000,
  },
  {
    description: 'Page C',
    price: 2000,
  },
  {
    description: 'Page D',
    price: 2780,
  },
  {
    description: 'Page E',
    price: 1890,
  },
  {
    description: 'Page F',
    price: 2390,
  },
  {
    description: 'Page G',
    price: 8490,
  },
  {
    description: 'Page B',
    price: 3000,
  },
  {
    description: 'Page C',
    price: 1500,
  },
  {
    description: 'Page D',
    price: 2080,
  },
  {
    description: 'Page B',
    price: 3000,
  },
  {
    description: 'Page C',
    price: 1500,
  },
];

export default function ChartReport({ categoryItems }) {
  // const descData = [...categoryItems].sort((a, b) => b.price - a.price);
  const { width: screenWidth } = useWindowDimensions();

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    if (screenWidth < 768) {
      console.log(x);
      return (
        <text
          x={width}
          y={y - 4}
          fill="#666"
          textAnchor="middle"
          dy={-10}
          fontSize={10}
        >{`${value} UAH`}</text>
      );
    }
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-10}
        fontSize={10}
      >{`${value} UAH`}</text>
    );
  };

  const renderCategoryLabel = ({ x, y, value, width, height }) => {
    if (screenWidth < 768) {
      return (
        <text
          x={x}
          y={y - 4}
          dy={-10}
          fontSize={10}
          fill="#666"
          textAnchor="start"
        >
          {value}
        </text>
      );
    }
    // return (
    //   <text x={x} y={y + height + 20} dy={-10} fontSize={10} textAnchor="start">
    //     {value}
    //   </text>
    // );
  };

  return (
    <div className={css.rechartContainer}>
      <BarChart
        width={
          window.screen.width < 768
            ? window.screen.width - 40
            : window.screen.width < 1280
            ? 635
            : 758
        } //664
        // height={window.screen.width < 768 ? 400 : 580}
        height={window.screen.width < 768 ? data.length * 50 : 422}
        data={data}
        margin={{ top: 20 }}
        // margin={{ top: 50, right: 15, bottom: 15, left: 15 }}
        layout={window.screen.width < 768 ? 'vertical' : 'horizontal'}
      >
        {screenWidth < 768 ? (
          <>
            <XAxis axisLine={false} type="number" hide />
            <YAxis dataKey="description" type="category" hide />
          </>
        ) : (
          <>
            <YAxis axisLine={false} type="number" hide tickCount={6} />
            <XAxis dataKey="description" type="category" />
            <CartesianGrid vertical={false} />
          </>
        )}

        {/* <Tooltip cursor={{fill: "transparent"}} />
        <Legend /> */}
        <Bar
          domain={[0, 400]}
          dataKey="price"
          barSize={window.screen.width < 768 ? 15 : 38}
          radius={window.screen.width < 768 ? [0, 10, 10, 0] : [10, 10, 0, 0]}
          label={renderCustomBarLabel}
        >
          <LabelList
            dataKey="description"
            content={renderCategoryLabel}
            fill="#52555F"
          />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index % 3 === 0 ? '#FF751D' : '#FFDAC0'}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
