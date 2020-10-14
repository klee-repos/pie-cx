import Axios from "axios"
import axios from 'axios'

class Alerts {

  constructor() {

  }

  async testAlert(socketId) {
    try {
      let results = await axios({
        url: `http://localhost:8080/admin/test-alert`,
        headers: {
          'api-key': process.env.REACT_APP_SERVER_KEY
        },
        data: {
          socketId
        }
      })
      return results.data
    } catch(err) {
      console.log(err)
      return null
    }
  }


}

export default Alerts