import { getAll, getOne, Request } from './Request';

const InitialState = {
  data: null,
  error: null,
  isFailed: false,
  isLoading: true,
}

function getRequest({
  event,
  config
}){


  async function fetchData(){
    let result = InitialState;
    let data = null;

    try {
      
      switch (event) {
        case 'GET':
          data = (await getAll({...config})).data
          break;
    
        case 'GETONE':
          data = (await getOne({...config})).data
          break;
      
        default:
          data = (await Request({...config})).data
          break;
      }

      result = {
        data: data,
        isFailed: false,
        isLoading: false,
        error: null
      }

    } catch (error) {

      result = {
        data: null,
        isFailed: true,
        isLoading: false,
        error: error
      }

    }

    return result;
  }

  return fetchData();

}

export {
  getRequest,
  InitialState
}