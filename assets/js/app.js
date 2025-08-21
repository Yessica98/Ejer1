const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se modifico el valor entre parentesis
const $b = document.querySelector('.blog'); //Se modifico el valor entre parentesis
const $l = document.querySelector('.location'); //Se modifico el valor entre parentesis

/*
 Se agrego la palabra async al principio de la funcion para corregir el error de await
 Se agregan  backticks en lugar de comillas simples
 Se agrega const data await response.json ();
 Se agrega un try y catch en la funcion displayUser
 Se cambia la variable response por data, para obtener la informacion del json*/
async function displayUser(username) {
  $n.textContent = 'cargando...';
  try{
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
  
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err){ 
   handleError (err);
  }
  

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //Se agrega corrige la variable ya que estaba mal escrita
}

displayUser('stolinski');