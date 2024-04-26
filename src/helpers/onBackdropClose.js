const onBackdropClose = ({ target, currentTarget }, closeFn) => {
  if (target === currentTarget) {
    closeFn();
    document.body.style.overflow = "visible";
  }
};

export default onBackdropClose;
