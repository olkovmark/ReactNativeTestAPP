import axios from "axios";
import { Photo } from "../models/interfeces";
import { API_URL,CLIENT_ID } from "../config/config";

const client_id: string =
  "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";
const apiUrl: string = "https://api.unsplash.com/photos/";

export const getPictureList = async (): Promise<Photo[] | null> => {
  try {
    const photos: Photo[] = (
      await axios.get(`${API_URL}?client_id=${CLIENT_ID}`)
    ).data;
    return photos;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getPicture = async () => {};
