const useConvertToLocalTime = () => {
  function convertTime(timeStamp) {
    const date = new Date(timeStamp * 1000);
    const time = date.toLocaleTimeString();
    return time;
  }
  return convertTime;
};

export default useConvertToLocalTime;
