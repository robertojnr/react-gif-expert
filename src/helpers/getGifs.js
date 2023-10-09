export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=S32Aeo6RQTnVc7NySlHnQ9GO7Gh8e7sF`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifts;
};
