export const throttle = (func, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      func.apply(this, arguments);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
