import axios from 'axios';

const userAxios = (store) => (next) => (action) => {
  console.log('userAxios middleware', action);


  axios.post('http://localhost:6000/api/v1/users', {
    email: 'test@mail.fr',
    password: 'blabal',
    pseudonym:'test'
  }).then((response) => {
  console.log('response',response)
  next(action);

  })
  .catch((error) => console.log('error ',error));

  // si je veux laisser passer l'action au prochain MW ou au reducer
  // on utilise la fonction next avec l'action en argument
  // next(action);
  
};



export default userAxios;