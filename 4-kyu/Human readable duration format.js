function formatDuration(seconds) {
  // Complete this function
  let result = "";
  let y = Math.floor(seconds / 31536000);
  let d = Math.floor((seconds - y * 31536000) / 86400);
  let h = Math.floor((seconds - y * 31536000 - d * 86400) / 3600);
  let m = Math.floor((seconds - y * 31536000 - d * 86400 - h * 3600) / 60);
  let s = Math.floor(seconds - y * 31536000 - d * 86400 - h * 3600 - m * 60);
  if (y > 0) {
    result += y + (y === 1 ? " year" : " years");
  }
  if (d > 0) {
    if (y > 0) {
      if (h <= 0 && m <= 0 && s <= 0) {
        result += " and " + d + (d === 1 ? " day" : " days");
      } else {
        result += ", " + d + (d === 1 ? " day" : " days");
      }
    } else {
      result += d + (d === 1 ? " day" : " days");
    }
  }
  if (h > 0) {
    if (d > 0 || y > 0) {
      if (m <= 0 && s <= 0) {
        result += " and " + h + (h === 1 ? " hour" : " hours");
      } else {
        result += ", " + h + (h === 1 ? " hour" : " hours");
      }
    } else {
      result += h + (h === 1 ? " hour" : " hours");
    }
  }
  if (m > 0) {
    if (d > 0 || h > 0 || y > 0) {
      if (s <= 0) {
        result += " and " + m + (m === 1 ? " minute" : " minutes");
      } else {
        result += ", " + m + (m === 1 ? " minute" : " minutes");
      }
    } else {
      result += m + (m === 1 ? " minute" : " minutes");
    }
  }
  if (s > 0) {
    if (y > 0 || d > 0 || h > 0 || m > 0) {
      result += " and " + s + (s === 1 ? " second" : " seconds");
    } else {
      result += s + (s === 1 ? " second" : " seconds");
    }
  }
  return h === 0 && m === 0 && s === 0 ? "now" : result;
}
