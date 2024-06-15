async function copyToClipboard(text: string, func?: () => void) {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      if (func) {
        func();
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export default copyToClipboard;
