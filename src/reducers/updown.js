const intialno = 0;

const changeNo = (state = intialno, action) => {
  switch (action.type) {
    case "PLUS":
      return (state += 1);
    case "MINUS":
      return (state -= 1);
    default:
      return state;
  }
};

export default changeNo;
