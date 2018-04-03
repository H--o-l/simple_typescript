
// const currentDate = '2018-03-30'
const currentDate = '2018-03-31'

function addMonths(date: Date, value: number) {
  let d = new Date(date), n = date.getDate();
  d.setDate(1); // to avoid overflow to next month
  d.setMonth(d.getMonth() + value);
  d.setDate(Math.min(n, getDaysInMonth(d.getFullYear(), d.getMonth())));
  return d;
}
function isLeapYear(year: number) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}
function getDaysInMonth(year: number, month: number) {
  return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31,
          30, 31, 31, 30, 31, 30, 31][month];
}

function dateFromOffset(monthOffset: number = 0, day: number = 1) {
  let date = addMonths(new Date(currentDate), monthOffset);
  date.setDate(day);
  return date;
}
const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                           'Juillet', 'Août', 'Septembre', 'Octobre',
                           'Novembre', 'Décembre'];
function monthSpliterFromat(date: Date) {
  return monthNames[date.getMonth()] + ' ' +
          date.getFullYear().toString() + ' :';
}

async function selectDate(year: number, month: number, day: number) {
  const currentYear = (new Date(currentDate)).getFullYear();
  if (currentYear !== year) {
    console.log('invoice datepicker click: ', currentYear.toString())
    console.log('invoice datepicker click: ', year.toString())
  }

  const currentMonthName = monthNames[(new Date(currentDate)).getMonth()]
                           .toLocaleLowerCase();
  const currentMonth = monthNames.findIndex(m =>
    m.toLocaleLowerCase() === currentMonthName);
  if (currentMonth !== month) {
    if (currentYear === year) {
      console.log('invoice datepicker click: ', monthNames[currentMonth])
    }
    console.log('invoice datepicker click: ', monthNames[month])
  }
  console.log('invoice datepicker click: ',day.toString())
}

console.log(monthSpliterFromat(dateFromOffset(-1, undefined)));
console.log(monthSpliterFromat(dateFromOffset(-1)));
async function toto() {
  try {
    let date = dateFromOffset(-1, undefined)
    await selectDate(date.getFullYear(), date.getMonth(), date.getDate());
  } catch (e) {
    // console.log(e);
  }
}

toto();
