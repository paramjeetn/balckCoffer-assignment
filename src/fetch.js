import axios from 'axios';

export const fetchUrl = async (url) => {
 const res  = await axios.get(`http://localhost:8080/${url}`);
 console.log('inside func');
 console.log(res.data);

 const fires = res.data;

 return fires;

}