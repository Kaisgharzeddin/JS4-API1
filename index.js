

document.getElementById("oppg1_but").addEventListener("click", function (){
    let mydata = document.getElementById("oppg1_inp").value.toLowerCase();
    const myapi = "https://hp-api.onrender.com/api/characters"
  let funnet = false

    fetch(myapi)
        .then(response => response.json())
        .then (data => {
            for (const element of data) {
                let bilde = `"`+element.image+`"`
                if (mydata == element.name.toLowerCase()) {
                    funnet = true
                    document.getElementById("name").innerHTML = element.name;
                    document.getElementById("actor").innerHTML = element.actor;
                    document.getElementById("species").innerHTML = element.species;
                    document.getElementById("gender").innerHTML = element.gender;
                    document.getElementById("house").innerHTML = element.house;
                    document.getElementById("dateOfBirth").innerHTML = element.dateOfBirth;
                    document.getElementById("ancestry").innerHTML = element.ancestry;
                    document.getElementById("eyeColour").innerHTML = element.eyeColour;
                    document.getElementById("hairColour").innerHTML = element.hairColour;
                    document.getElementById("bilde").innerHTML = `<img src=${bilde}>`
                }
            }
            if (funnet == true) {
              console.log(funnet)
              document.getElementById("container2").classList.remove("hidden")
              document.getElementById("feilmelding").classList.add("hidden");

            } else {
              document.getElementById("container2").classList.add("hidden")
              document.getElementById("feilmelding").classList.remove("hidden")              
            }
        })
})

var input = document.getElementById("oppg1_inp");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("oppg1_but").click();
  }
})