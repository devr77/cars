export function trim(assetId) {
  // Check and remove "image-" if it exists
  return assetId?.replace("image-", "").replace(/-(\w+)$/, ".$1");
}
