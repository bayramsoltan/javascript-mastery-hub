const frmLogin = document.getElementById("frmLogin");
frmLogin.addEventListener("submit",(e)=>{
    e.preventDefault(); //formun submit ozelligini devre disi birakir
    const txtEmail =document.getElementById("txtEmail");
    const txtPassword =document.getElementById("txtPassword");

    try {
        const email = txtEmail.value;
        const password = txtPassword.value;

        if(!email || !isEmail(email)) throw new Error("Please a valid email"); //hata firlatir
        if(!password) throw new Error("Please enter your password");

        e.target.submit();
        
    } catch (err) {
        
        console.error(err);
        alert(err.message);

    }
})

const isEmail = (email)=>{
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}