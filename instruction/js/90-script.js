const ocPrivacy = new bootstrap.offcanvas("#ocPrivacy");
const isPrivacyPolicyAccepted =localStorage.getItem("privacy-policy");

isPrivacyPolicyAccepted && ocPrivacy.show();
ocPrivacy.show();

document.getElementById("btnAcceptPrivacy").addEventListener("click",()=>{
    localStorage.setItem("privacy-policy",true);
    ocPrivacy.hide();
})