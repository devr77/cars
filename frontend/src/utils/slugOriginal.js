export function slugToOriginal(slug) {
  return slug
    .split("-") // Split the slug into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back together with spaces
}
