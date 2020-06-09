import axios from 'axios';


//Demo API call for Testing.

export const sampleApiCall = async (getSampleApiCall) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    getSampleApiCall(response.data);

}

export default {
    sampleApiCall,  
}