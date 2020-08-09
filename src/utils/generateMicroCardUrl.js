function generateQuery({ title, description, image }) {
  const preset = 'preset=ajames';
  let query = `?${preset}`;

  if (title) {
    query = query.concat('&', `title=${title}`);
  }

  if (description) {
    query = query.concat('&', `subtitle=${description}`);
  }

  if (image) {
    query = query.concat('&', `image=${image}`);
  }

  return query;
}

export function generateMicroCardUrl(queryParams) {
  const microLinkApi = 'https://i.microlink.io/';
  const microCardApi = 'https://cards.microlink.io/';
  const microCardQuery = encodeURIComponent(generateQuery(queryParams));

  console.log(microCardQuery);

  return `${microLinkApi}${microCardApi}${microCardQuery}`;
}
