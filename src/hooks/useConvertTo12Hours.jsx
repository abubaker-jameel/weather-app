const useConvertTo12Hours = () => {
  function convertTo12HourFormat(time24) {
    const [hours] = time24.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 12));
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hourCycle: "h12",
    }).format(date);
  }
  return convertTo12HourFormat;
};

export default useConvertTo12Hours;
