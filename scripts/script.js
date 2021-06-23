function createPassword() {
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()[]{};':\",.<>/?";
    var password = "";
    var length = document.getElementById("length").value;
    if(length>=4 && length<=30) {
        n = char.length;
    for (var i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password-output").innerHTML = password;
    document.getElementById("copy-icon").style.display = "inline";
    document.getElementsByTagName("INPUT")[3].setAttribute("value", "Generate new password");
    } else {
        document.getElementById("password-output").innerHTML = "Select length between 4 to 30";
        document.getElementById("copy-icon").style.display = "none";
    }
    
}
// function SubmitForm(e) {
//     e.preventDefault();
// }