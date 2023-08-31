import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'ET',
    maxResults: '50',
    order: 'date',
    // pageToken: 'CDIQAA'
  },
  headers: {
    'X-RapidAPI-Key': '91c1f39d51msh21e425064297fcap10772ejsn99273125779c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


const fetchFromApi = async()=>{
   return await axios.request(options);
    
}

export default fetchFromApi;