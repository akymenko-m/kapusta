export const translateCategory = category => {
  switch (category) {
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'Alcohol';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technique';
    case 'Коммуналка и связь':
      return 'Communal, communication';
    case 'Спорт и хобби':
      return 'Sports, hobbies';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Add.income';
    default:
      throw new Error(`Unsupported category value - ${category}`);
  }
};
