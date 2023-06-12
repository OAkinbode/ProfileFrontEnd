const isMobile = (state = false, action) => {
  switch (action.type) {
    case "MOBILE":
      return true;
    case "FULL":
      return false;
    default:
      return state;
  }
};

export default isMobile;
