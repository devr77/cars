import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanityClients";

const builder = imageUrlBuilder(client);

export function imageUrls(source) {
  return builder?.image(source);
}
