/* eslint-disable no-undef */
const displayTime = () => {
  const time = document.getElementById('date');
  const currentDate = luxon.DateTime.local().toLocaleString(
    luxon.DateTime.DATETIME_FULL,
  );
  time.innerHTML = currentDate;
};

export default displayTime;