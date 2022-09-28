var OpenApiPetstore = require("open_api_petstore");

var api = new OpenApiPetstore.PetApi();

api.getPetById(1).then(
  function (data) {
    console.log("API called successfully. Returned data: ");
    console.log(data);
  },
  function (error) {
    console.error(error);
  }
);
