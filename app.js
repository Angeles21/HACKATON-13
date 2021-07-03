/* MAIN */
const xhr = new XMLHttpRequest();

xhr.open("GET", "./database.json", true);

xhr.onload = function () {
	const dogo = JSON.parse(this.responseText);
	console.log(dogo);

	let template = "";
	dogo.forEach((dogolist) => {
		template += `
    <div class="col-sm-6 col-md-3 mb-3">
      <div class="card" id="demo">
        <div class="card-body">
          <button  onclick="myFunction()" href="#" class = "delete"  id="delete"> x </button>
          <img src="${dogolist.image}" class="dogopic" />
          <div>
          <button href="#" class= "edit editdog"  data-id="${dogolist.id}"> Edit </button>
          <h5 class="card-title">${dogolist.name}</h5>
          <p class="card-text mb-0 phone"><span class="fw-bolder text-muted"> Phone: </span>${dogolist.phone}</p>
          <p class="card-text mb-0 email"><span class="fw-bolder text-muted"> Email: </span>${dogolist.email}</p>
          <hr>
          <p class="card-text mb-0 about"><span class="fw-bolder text-muted"> About: </span>${dogolist.about}</p>
          </div>
        </div>
      </div>
    </div>
    `;
	});

	document.getElementById("doglist").innerHTML = template;
};

xhr.send();

function add(addInfo) {
  let template ="";
  alert	{template += `};
  }
  
  function procesarEntradaUsuario(callback) {
  var nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);
