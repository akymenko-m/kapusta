import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  Cell,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { selectCurrentReport } from 'redux/Transactions/selectors';
import css from './ChartReport.module.css';

export default function ChartReport({ sortEntries }) {
  const curReport = useSelector(selectCurrentReport);

  const expensesDictionary = {
    Продукты: 'Products',
    Алкоголь: 'Alcohol',
    Развлечения: 'Entertainment',
    Здоровье: 'Health',
    Транспорт: 'Transport',
    'Всё для дома': 'Housing',
    Техника: 'Technique',
    'Коммуналка и связь': 'Communal, communication',
    'Спорт и хобби': 'Sports, hobbies',
    Образование: 'Education',
    Прочее: 'Other',
  };

  const incomesDictionary = {
    'З/П': 'Salary',
    'Доп. доход': 'Add. income',
  };

  const thesaurus =
    curReport === 'Expenses' ? expensesDictionary : incomesDictionary;

  const data = sortEntries.map(item => {
    if (thesaurus[item.name]) {
      return { ...item, name: thesaurus[item.name] };
    }
    return item;
  });

  const { width: screenWidth } = useWindowDimensions();

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    if (screenWidth < 768) {
      return (
        <text
          x={(window.innerWidth - 40) * 0.8}
          y={y - 4}
          fill="#666"
          // textAnchor="middle"
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

  const RenderCategoryLabel = ({ x, y, value, width, height }) => {
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
        }
        height={window.screen.width < 768 ? data.length * 50 : 422}
        data={data}
        margin={{ top: 20 }}
        // margin={{ top: 50, right: 15, bottom: 15, left: 15 }}
        layout={window.screen.width < 768 ? 'vertical' : 'horizontal'}
      >
        {screenWidth < 768 ? (
          <>
            <XAxis axisLine={false} type="number" hide />
            <YAxis dataKey="name" type="category" hide />
          </>
        ) : (
          <>
            <YAxis axisLine={false} type="number" hide tickCount={6} />
            <XAxis dataKey="name" type="category" />
            <CartesianGrid vertical={false} />
          </>
        )}
        <Bar
          domain={[0, 400]}
          dataKey="total"
          barSize={window.screen.width < 768 ? 15 : 38}
          radius={window.screen.width < 768 ? [0, 10, 10, 0] : [10, 10, 0, 0]}
          label={renderCustomBarLabel}
        >
          <LabelList
            dataKey="name"
            content={<RenderCategoryLabel />}
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
