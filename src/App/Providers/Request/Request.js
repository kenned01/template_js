import axios from 'axios';

const BASE_URL = "https://127.0.0.1:8000";
const DEBUG = true;

function reportError(e) {

  const error = {
    status: 500,
    data: e
  }

  if(DEBUG) console.error("[FETCH DEBUG]", error)

  return error
}

async function getOne({uri,id = 0, headers = {}, params = {}})
{

  try {
    let response = await axios.get(`${BASE_URL}/${uri}/${id}` , {
      headers: headers,
      params: params
    })

    let result = response;
    return result;

  } catch (error) {

    if(!error.response) throw reportError(error)
    throw error.response;
  }
}

async function getAll({uri, headers = {}, params = {}})
{

  try {
    let response = await axios.get(`${BASE_URL}/${uri}` , {
      headers: headers,
      params: params
    })

    let result = response;
    return result;

  } catch (error) {

    if(!error.response) throw reportError(error)
    throw error.response;   

  }
}

async function Request({uri, method, data={}, headers = {}, params = {}})
{
  try {
    let response = await axios({
      url: `${BASE_URL}/${uri}`,
      method: method,
      headers: headers,
      params: params,
      data: data
    });

    let result = response;
    return result;

  } catch (error) {

    if(!error.response) throw reportError(error)
    throw error.response;

  }

}

export {
  getOne,
  getAll,
  Request
}