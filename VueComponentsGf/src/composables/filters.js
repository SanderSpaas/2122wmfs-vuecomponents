/* eslint-disable prettier/prettier */
export function useFilters() {
  const toDate = function (date) {
    return date.toLocaleString("nl-BE", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };
  const toHour = function (date) {
    return date.toLocaleString("nl-BE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const toGhentTime = function (start, end) {
    const localStart = new Date(start);
    if (!end) {
      /* return ma 22 jul. om 01:30 */
      return toDate(localStart) + " om " + toHour(localStart);
    }
    const localEnd = new Date(end);
    if (localEnd.getDate() === localStart.getDate()) {
      /* return ma 22 jul. van 01:30 tot 14:00 */
      return toDate(localStart) + " van " + toHour(localStart) + " tot " + toHour(localEnd);
    }
    /* return ma 22 jul. om 01:30 tot di 23 jul. om 08:00 */
    return (
      toDate(localStart) +
      " om " +
      toHour(localStart) +
      " tot " +
      toDate(localEnd) +
      " om " +
      toHour(localEnd)
    );
  };

  const ellipsis = function (value, end = 150) {
    if (value) {
      return "...";
    } else if (value < end) {
      return value;
    } else if (value > end) {
      return value.Substring(0, end) + "...";
    }
    /*
    indien geen value --> return "…"
    indien value < end --> doe niks, return value
    indien value.length > end --> return substring + "…"
    */
  };
  return {
    toGhentTime,
    ellipsis,
  };
}
