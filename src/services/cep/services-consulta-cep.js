
import axios from 'axios';
import { notifyGenericPositive, notifyGenericNegative } from 'src/functions/functions-notify'

let baseURL = 'https://viacep.com.br/ws/';


export default {

  async BuscarCEPService (value) {
    try {
      const response = await axios.get(baseURL + value + '/json/')
      return response
    } catch (error) {
      console.log(error)
      notifyGenericNegative("CEP não encontrado! Informe o endereço do imóvel");
      return null
    }


  },
}
