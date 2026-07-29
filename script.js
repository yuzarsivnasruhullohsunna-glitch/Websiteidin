function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Admin" && password == "12345") {
        alert("Login berhasil!");
        window.location.href = "rahasia.html";
    } 
    else {
        alert("Username atau password salah!");
    }

}
function logout(){
    alert("Anda keluar!");
    window.location.href = "index.html";
}