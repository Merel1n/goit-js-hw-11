export function getImage(tags) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44483599-b54948657c32ff6f545b82f23',
    q: tags,
    image_type: 'photo',
    pretty: true,
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url).then(res => res.json().catch(error => console.log(error)));
}
