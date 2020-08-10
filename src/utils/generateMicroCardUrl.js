function generateQueryString(queryParams) {
  const preset = 'preset=ajames';
  const params = Object.keys(queryParams)
    .map(key => `&${key}=${queryParams[key]}`)
    .join('');

  return `?${preset}${params}`;
}

export function generateMicroCardUrl(queryParams) {
  const api = 'https://i.microlink.io/';
  const query = generateQueryString(queryParams);
  const cardUrl = `https://cards.microlink.io/${query}`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;

  console.log(image);

  return image;
}
