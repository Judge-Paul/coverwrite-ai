const isURL = (str) => {
  const urlPattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
  return urlPattern.test(str);
};

export default isURL;
