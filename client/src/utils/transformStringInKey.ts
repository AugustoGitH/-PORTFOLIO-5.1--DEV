const transformStringInKey = (string: string): string => {
  return string.trim().toLowerCase().replace(/ /, '-');
};

export default transformStringInKey;
