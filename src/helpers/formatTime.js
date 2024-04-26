const formatTime = (dateStr) => {
  const date = new Date(dateStr);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  const formattedTime = `${hours12}:${
    minutes < 10 ? "0" : ""
  }${minutes}${ampm}`;

  return formattedTime;
};

export default formatTime;
