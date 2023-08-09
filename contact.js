function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if (name == "") {
        return alert ("Nama wajib diisi!");
    } else if (email =="") {
        return alert ("Email wajib diisi!");
    } else if (phone =="") {
        return alert ("Phone Number wajib diisi!");
    } else if (subject =="") {
        return alert ("Subject wajib diisi!");
    } else if (message =="") {
        return alert ("Message wajib diisi!");
    } 

    let emailReceiver = "ahmadmaulanay08@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, silakan kontak saya pada nomor ${phone}`;
    a.click();

    let data = {name, email, phone, subject, message};
    console.log(data);
}