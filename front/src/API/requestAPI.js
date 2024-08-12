// Config JSON:
import api from './configApi.json';
// Funcionalidades / Libs:
import axios from "axios";

// Variaveis:
// Base URL: http://10.10.0.210:8000/api
export const API_URL = api.api_url;


// End-Points / Rotas da API:
// Adiciona array de objetos (CREATE):
// export async function NUMEROS_CREATE_ALL(formData) {
//    console.log('CALL FUNCTION API');

//    const response = await axios.post(API_URL + '/create.php', formData);

//    // console.log(response.data);
//    return response.data;
// }

// Pega todos os Numeros (READ):
export async function PROJETOS_GET_ALL() {
   console.log('CALL FUNCTION API');

   const response = await axios.get(API_URL + '/read.php');

   // console.log(response.data);
   return response.data;
}

// Pega Numero pelo ID (READ):
// export async function NUMEROS_GET_ID(id) {
//    console.log('CALL FUNCTION API');

//    const response = await axios.get(API_URL + '/read.php?id=' + id, { 
//       headers: { "Accept": "application/json" }
//    });

//    // console.log(response.data);
//    return response.data;
// }

// Filtra por parametro get (READ):
// export async function NUMEROS_GET_FILTER(param) {
//    console.log('CALL FUNCTION API');

//    const response = await axios.get(API_URL + '/numeros?' + param.key + '=' + param.value, { 
//       headers: { "Accept": "application/json" }
//    });

//    // console.log(response.data);
//    return response.data;
// }

// Edita Numero (UPDATE):
// export async function NUMEROS_UPDATE_ID(formData) {
//    console.log('CALL FUNCTION API');

//    const response = await axios({
//       method: 'post',
//       url: API_URL + '/update.php',
//       data: formData, // ID já está no formData
//    });

//    // console.log(response.data);
//    return response.data;
// }