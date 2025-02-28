//checks if valid creds where givin, if they are not valid creds 
//displays a message to the page that says incorrect creds
function checkCredtials()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const insertHtmlDiv = document.getElementById("JavaScript");

    if(username != process.env.HOME_USERNAME && password != process.env.HOME_PASSWORD){
        insertHtmlDiv.innerHTML = "Incorrect Username or Password";
        console.log("Incorrect Username or Password");
        return;
    }
    else if(password != process.env.HOME_PASSWORD){
        insertHtmlDiv.innerHTML = "Incorrect Password"
        console.log("Incorrect Password");
        return;
    }
}