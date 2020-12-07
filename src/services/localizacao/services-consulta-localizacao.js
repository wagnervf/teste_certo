
import axios from 'axios';
import { notifyGenericPositive, notifyGenericNegative } from 'src/functions/functions-notify'

//let baseURL = 'https://geocode.xyz/Hauptstr.,+57632+Berzhausen?json=1';
// axios.get(`https://geocode.xyz/${latitude},${longitute}?json=1`,)



export default {

  async BuscarLocalizacaoService (latitude, longitute) {

    try {
      const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitute}&localityLanguage=pt`)
      //console.log(response)
      let localizacao = {
        'cidade': response.data.city,
        'estado': this.replaceUF(response.data.principalSubdivisionCode)
      }

      return localizacao
    } catch (error) {
      console.log(error)
      return null
    }
  },


  replaceUF (value) {
    return value.replace("BR-", "")
  }
}
