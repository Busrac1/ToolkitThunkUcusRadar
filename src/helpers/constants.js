export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '35.829422',
    bl_lng: '25.539188',
    tr_lat: '41.668458',
    tr_lng: '44.975235',
    limit: '300'
  },
  headers: {
    'X-RapidAPI-Key': '8de4a09cefmsh8a8eda85b0805cfp1789d5jsne11a8f332fbc',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};


export const detailOptions = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
  params: {flight: '322db5d1'},
  headers: {
    'X-RapidAPI-Key': '8de4a09cefmsh8a8eda85b0805cfp1789d5jsne11a8f332fbc',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};