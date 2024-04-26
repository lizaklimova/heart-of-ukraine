const determineUsersQnty = (arrLength) => {
  switch (true) {
    case String(arrLength).includes("00"):
      return "usersApplied5";
    case String(arrLength).includes("1"):
      return "usersApplied1";
    case String(arrLength).includes("2") ||
      String(arrLength).includes("3") ||
      String(arrLength).includes("4"):
      return "usersApplied2";
    case String(arrLength).includes("5"):
      return "usersApplied5";
    default:
      return "usersApplied5";
  }
};

export default determineUsersQnty;
