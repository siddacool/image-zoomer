function imageLoadPromise(url) {
  const promiseObj = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = data => resolve(data);
    img.onerror = () => reject();

    img.src = url;
  });
  return promiseObj;
}

export default imageLoadPromise;
