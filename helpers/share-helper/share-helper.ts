export const shareFile = (file: any, title: string, text: string) => {
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator
      .share({
        files: [file],
        title,
        text
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed", error));
  } else {
    console.log(`Your system doesn't support sharing files.`);
  }
};

export const canShareVerify = () => {
  return navigator.canShare && navigator.canShare()
}

export const dataURLtoFile = (dataurl: any, filename: string) => {
  let arr = dataurl.split(","),
    mimeType = arr[0].match(/:(.*?);/)[1],
    decodedData = atob(arr[1]),
    lengthOfDecodedData = decodedData.length,
    u8array = new Uint8Array(lengthOfDecodedData);
  while (lengthOfDecodedData--) {
    u8array[lengthOfDecodedData] = decodedData.charCodeAt(lengthOfDecodedData);
  }
  return new File([u8array], filename, { type: mimeType });
};