const ApiKey = "AIzaSyB6YVMDfDH8eDgYgPSRx_KvdKsH-ZKpZRA";
// export const URL =
//   "https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=IN&key=" +
//   ApiKey;

export const YOU_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  ApiKey;

//const CORS_PROXY = "https://cors-anywhere.herokuapp.com/corsdemo/";

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
