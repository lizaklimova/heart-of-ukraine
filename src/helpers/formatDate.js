const formatDate = (dateStr) => {
  const newDate = new Date(dateStr);

  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  if (month < 10 || day < 10) {
    month = String(month).padStart(2, "0");
    day = String(day).padStart(2, "0");
  }

  return `${day}.${month}.${year}`;
};

export default formatDate;
