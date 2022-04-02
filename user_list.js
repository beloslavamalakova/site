const MyRequest = new XMLHttpRequest();
MyRequest.onload = () =>{
  const data = JSON.parse(MyRequest.response);
  for(let i =0; i< data.length; i++){
    let myDiv = document.createElement("div");
    myDiv.addEventListener("click", function(){
      let myWindow = window.open("", "PersonalInfo");
      myWindow.document.write( <title>User information</title>);
      for (const property in data[i]){
        myWindow.document.write('${propert}: ${JSON.stringify(data[i][property])} <br>');
      }
    });
    myDiv.innerHTML - "<img class-'centering' src-'"+data[i].avatar + '>' +
         "<p> Full name: " + data[i].first_name + "" + data[i].last_name+ "</p>" +
         "<p> username: " + data[i].username+ "</p>" +
         "<p> email: " + data[i].email + "</p>" +
         "<p> phone number: " + data[i].phone_number +  "</p><hr>";
      document.getElementById("usersListDiv").appendChild(myDiv);

  } 
};
MyRequest.open('GET, "https://random-data-api.com/api/users/random_user?size=15");
MyRequest.send();