export const getGiffs = async (category) => {
  const { VITE_GIPHY_API } = import.meta.env;

  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${VITE_GIPHY_API}&q=${category}&limit=10`
  );

  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
