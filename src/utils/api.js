import axios from "axios";
/*Axios Casas*/
export const obtenerHouses = async (successCallback, errorCallback )=>{
    const options = {method: 'GET', url: 'http://localhost:5000/casas'};
    axios.request(options).then(successCallback).catch(errorCallback);
}

export const crearCasa = async (data, successCallback, errorCallback)=>{
    const options = {
        method: 'POST',
        //url donde esta desplegada la api
        url: 'http://localhost:5000/casas',
        headers: {'Content-Type': 'application/json'},
        //datos del fomulario se asignan como vlor de los campos de la bd
        data,
      };

    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const editarCasa = async (id, data, successCallback, errorCallback)=>{
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/casas/${id}`,
        headers: {'Content-Type': 'application/json'},
        data ,
      };

    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const eliminarCasa = async (id, successCallback, errorCallback)=>{
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/casas/${id}/`,
        headers: {'Content-Type': 'application/json'},
      };
    await axios.request(options).then(successCallback).catch(errorCallback)
}

/*Axios Clientes*/
export const obtenerClientes = async (successCallback, errorCallback)=>{
    const options = {method: 'GET', url: 'http://localhost:5000/customer'};
    await axios.request(options).then(successCallback).catch(errorCallback);
}