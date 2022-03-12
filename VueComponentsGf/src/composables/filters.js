export function useFilters() {
  const toDate = function (date) {
    return date.toLocaleString("nl-BE", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };
  const toHour = function (date) {};
  const toGhentTime = function (start, end) {
    const localStart = new Date(start);
    if (!end) {
      /* return ma 22 jul. om 01:30 */
      return date.toLocaleString("nl-BE", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "short",
      });
    }
    const localEnd = new Date(end);
    if (localEnd.getDate() === localStart.getDate()) {
      /* return ma 22 jul. van 01:30 tot 14:00 */
    }
    /* return ma 22 jul. om 01:30 tot di 23 jul. om 08:00 */
  };
  const ellipsis = function (value, end = 150) {
    if (value) {
      return "...";
    } else if (value < end) {
      return value;
    } else if (value.length > end) {
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
