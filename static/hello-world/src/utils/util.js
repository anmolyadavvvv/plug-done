
const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  export default formatDate;