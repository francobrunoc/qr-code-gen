const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrUrl = wrapper.querySelector(".url"),
qrName = wrapper.querySelector(".name"),
qrMatricula = wrapper.querySelector(".matricula"),
qrImg = wrapper.querySelector(".qr-code img"),
generateBtn = wrapper.querySelector(".form button");



generateBtn.addEventListener("click", () => {
    if (!qrUrl.value || !qrName.value || !qrMatricula.value) return;
    generateBtn.innerText = "Gerando QR code..";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrUrl.value + '?name=' + qrName.value + '?matricula=' + qrMatricula.value}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "QR code gerado!";
    });
   
});


qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
}); 









