export default function getMovieImage(
  imagePath?: string,
  size: string = "w500",
) {
  if (!imagePath) return "";
  return `https://image.tmdb.org/t/p/${size}/${imagePath}`;
}
