import axios from 'axios'

export default axios.create({
  // baseURL: "http://localhost:5000/api/v1/restaurants",
  baseURL: "https://webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-xbiex/service/restaurants/incoming_webhook/",
  headers: {
    "Content-type": "application/json"
  }
})