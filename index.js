const heading = document.querySelector("h2");
const headingText = heading.textContent;

const button = document.createElement("button");
button.textContent = "Push me";

document.body.appendChild(button);


// fetchの内容
function fetchUserInfo(userId){
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(responce => {
            console.log(responce.status);
            if (!responce.ok){
                console.error("エラーレスポンス", responce);
            }else{
                return responce.json().then(
                userInfo =>{
                    console.log(userInfo);
                });
            }
        }).catch(error => {console.error(error)});
}

