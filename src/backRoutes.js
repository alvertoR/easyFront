var url = "https://easyworkback.herokuapp.com/easyWork"

var routesApi = {
  soporte: {
    postPqr: `${url}/soporte/newPqr`,
    getPqrs: `${url}/soporte/pqrs`
  },
  trabajo: {
    newWork: `${url}/user/new-work`,
    getWorks: `${url}/user/get-works`,
    uploadFile: `${url}/user/upload-file/` //+idUser//+idWork
  },
  user: {
    register: `${url}/user/register`,
    login: `${url}/user/login`,
    getUsers: `${url}/user/get-users`
  }
};

export default routesApi;
