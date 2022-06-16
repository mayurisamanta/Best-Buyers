let data = JSON.parse(localStorage.getItem("tempUserData"));
console.log(data);

data.forEach(function (elem) {
  let name = document.createElement("h3");
  let userName = elem.Name;
  name.innerHTML = `Hi, ${userName}. Welcome Back.`;
  document.getElementById("name").append(name);

  let userId = elem.memberId;
  let id = `Member ID:  ${userId}`;
  document.getElementById("memberID").innerText = id;
});
