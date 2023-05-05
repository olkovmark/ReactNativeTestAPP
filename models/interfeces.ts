export interface Photo {
  id: string;
  description: string;
  urls: {
    thumb: string;
  };
  user: {
    name: string;
  };
}
