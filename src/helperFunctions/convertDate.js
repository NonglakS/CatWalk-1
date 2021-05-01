import format from 'date-fns/format';

export default function convertDate(date) {
  const splitDate = date.slice(0, 10).split('-');
  const jsDate = new Date(splitDate[0], splitDate[1], splitDate[2]);

  return format(jsDate, 'MMMM do, yyyy');
}
