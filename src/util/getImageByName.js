// src/utils/getImageByName.js

import { DESTINATION_IMAGES, ADVENTURE_IMAGES, HOTEL_IMAGES } from "../Constants/images";

export const getImageByName = (category, name) => {
  switch (category) {
    case "destination":
      return DESTINATION_IMAGES[name];
    case "adventure":
      return ADVENTURE_IMAGES[name];
    case "hotel":
      return HOTEL_IMAGES[name];
    default:
      return null;
  }
};
