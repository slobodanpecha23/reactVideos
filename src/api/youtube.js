import axios from 'axios';

const KEY = 'AIzaSyCdoZPjp9s-nABrTCo3A7Nzmxuwk7UjXo4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
