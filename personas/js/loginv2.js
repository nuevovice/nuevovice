function rescatarInputs() {
          var inputPassword = document.getElementById("password").value;
          var inputRut = document.getElementById("username").value;
          console.log("Clave: ", inputPassword);
          console.log("Rut Aux: ", inputRut);
          alert(inputPassword+" - "+inputRut)
          // Aquí puedes realizar más acciones con estos valores, como enviarlos a un servidor o manipularlos de alguna otra manera.
        }
