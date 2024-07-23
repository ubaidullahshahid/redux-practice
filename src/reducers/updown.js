const intialno = 0;

const changeNo = (state = intialno, action) => {
  if (action.type === "PLUS") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};

export default changeNo;
