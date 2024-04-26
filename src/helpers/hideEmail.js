const hideEmail = (email) => {
  if (email) {
    let atIndex = email.indexOf("@");
    let emailWithoutDomain = email.substring(0, atIndex);
    let domain = email.substring(atIndex);
    let maskedEmail = emailWithoutDomain.slice(0, 2) + "*******" + domain;
    return maskedEmail;
  }
};

export default hideEmail;