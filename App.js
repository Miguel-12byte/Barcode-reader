const video = document.getElementById("video");
const resultado = document.getElementById("resultado");
const iniciar = document.getElementById("iniciar");

const codeReader = new ZXing.BrowserMultiFormatReader();

iniciar.addEventListener("click", async () => {

    try {

        const devices = await codeReader.listVideoInputDevices();

        if(devices.length === 0){
            alert("Nenhuma câmera encontrada.");
            return;
        }

        await codeReader.decodeFromVideoDevice(
            devices[0].deviceId,
            video,
            (result, err) => {

                if(result){
                    resultado.innerText = result.text;

                    navigator.vibrate?.(200);

                    console.log("Código:", result.text);
                }
            }
        );

    } catch(error){
        console.error(error);
        alert("Erro ao acessar a câmera.");
    }

});
