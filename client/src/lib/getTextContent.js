import axios from "axios";

const serverURL = import.meta.env.VITE_APP_SERVER_URL;
const getTextContent = async (url) => {
  try {
    const response = await axios.get(`${serverURL}/company-info?url=${url}`);
    return response.data.text;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};

export default getTextContent;
