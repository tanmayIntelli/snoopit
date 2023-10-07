export const debouncedFunc = (fn, delay = 300) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

/**
 * This function is to make api call.
 *
 * @param {String} url - API url to call.
 * @param {Object} data - data to be sent with api call.
 * @returns {Promise} - data from API
 */
export const callService = async (url, data) => {
  const patternData = /^[a-zA-Z0-9, \-_]*$/;
  const patternUrl = /^[A-Za-z0-9{} =&?/\-_]*$/;
  
  url = url?.trim();

  if (patternUrl.test(url)) {
    if (patternData.test(data)) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } else {
      console.error("Invalid data");
    }
  } else {
    console.error("Invalid URL");
  }
};
