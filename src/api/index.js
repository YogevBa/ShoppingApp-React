import axios from "axios";

export function postUserCheckout(data) {
  return axios
    .post("/testapi.php", data)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
