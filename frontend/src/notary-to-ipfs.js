import axios from "axios";

export const sendFileToIPFS = async (files) => {
  const fileImg = files[0];
  if (fileImg) {
    try {
      const formData = new FormData();
      formData.append("file", fileImg);
      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: "509158851b2a3c759fd2",//process.env.VITE_PINATA_API_KEY,
          pinata_secret_api_key: "147cffe317408f24a05fd8ee3fd824ea5492e6d70b12b23a255f44da03bca39f",//process.env.VITE_PINATA_API_SECRET,
          "Content-Type": "multipart/form-data",
        },
      });
      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      return ImgHash;
    } catch (error) {
      console.error("Error sending File to IPFS: ", error);
      throw error;
    }
  }
  throw new Error("No file provided");
};

export default sendFileToIPFS;