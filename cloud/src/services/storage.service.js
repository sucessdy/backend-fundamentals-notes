// import { ImageKit } from "@imagekit/nodejs/client.js";
import { ImageKit } from "@imagekit/nodejs/client.js";

const imageKit = new ImageKit({
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

async function UploadFile(buffer) {
  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.png",
  });
  return result;
}
export default UploadFile;
