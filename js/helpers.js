export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(5)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`Cannot load JSON - ${err}`);

    return data;
  } catch (err) {
    console.log(`${err} ERROR!`);
  }
};
