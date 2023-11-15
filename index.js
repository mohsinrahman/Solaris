
class CreateSolarSystem {
    constructor() {  } 
     start(){

        let mainDiv = document.createElement('div');
        mainDiv.style.cssText = 'position:absolute;width:100%;height:100%;z-index:100;display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-gap: 5px;justify-items: center; align-items: center; background: linear-gradient(to left, #0C164D 0%, #190B22 100%); padding: 10px;';
        document.body.append(mainDiv);
        const getPlanetData = async () => {
            let planetData;
            await fetch('planetData.json')
            .then(result => result.json())
            .then(data => {
                planetData = data;
            });
            console.log('test2',planetData);
        let planet = planetData;
        console.log(planet)
        for (let index = 0; index < planet.length; index++) {
             planet[index].name = document.createElement('div');   
        }
        for (let index = 0; index < planet.length; index++) {
            planet[index].name.setAttribute("id", planet[index].id);
            planet[index].name.style.width = planet[index].width;
            planet[index].name.style.height = planet[index].height;
            planet[index].name.style.background = planet[index].background;
            planet[index].name.style.borderRadius = planet[index].borderadius;
            if(planet[index].id === "Saturnus"){
                let ellipseDiv = document.createElement('div');
                ellipseDiv.style.width = "20px";
                ellipseDiv.style.height = "10px";
                ellipseDiv.style.backgroundColor = "red";
            // planet[index].name.style.borderTop: 1px solid black;
            //     width: 150px;
            //      rotate: -30deg;
            //     filter: blur(2px);
            console.log("Click Saturnus");
            }
            console.log(planet[index].name);
        }
        for (let index = 0; index < planet.length; index++) {
            mainDiv.appendChild(planet[index].name);    
        }
    };
    getPlanetData();
  }
}

class DisplayPlanetDetails {
    constructor() { 
     
     } 

    async solaris() {
        let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: "GET",
        headers: { "x-zocom": "solaris-1Cqgm3S6nlMechWO" },
    });
    const data = await resp.json();
    window.solaris = data.bodies;

    console.log(data);

    

  
   for(let index = 0; index < data.bodies.length; index++) {
       
                
         let clickPlanet = document.getElementById(data.bodies[index].name);
        
         clickPlanet.addEventListener('click', function(){ 
            
         this.parentNode.remove()
        //  this.parentNode.removeChild(this);
         let mainDiv = document.createElement('div');
        mainDiv.style.cssText = 'position:absolute;width:100%;height:100%;z-index:100;display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-gap: 5px;justify-items: center; align-items: center; background: linear-gradient(to left, #0C164D 0%, #190B22 100%); padding: 10px;';
        document.body.append(mainDiv);
        let backToMainPage = document.createElement("button");
        backToMainPage.style.width = 100+"px";
        backToMainPage.style.height = 50+"px";
        backToMainPage.innerText = "Back To Main Page";
        backToMainPage.id = "backPage";
        backToMainPage.style.color = "black";
        mainDiv.appendChild(backToMainPage);
        backToMainPage.addEventListener('click', function(){ 
            mainDiv.remove()
            createSolarSystem.start()
            displayPlanetDetails.solaris(); 
        })
        let cardDiv = document.createElement('div');
        cardDiv.style.width = 500+"px";
        mainDiv.append(cardDiv);
        mainDiv.style.color = "#ffffff";
        let h31 = document.createElement('h3');
        cardDiv.append(h31);
        h31.innerHTML += data.bodies[index].name; 
        let p = document.createElement('p');
        cardDiv.append(p);
        p.innerHTML += data.bodies[index].desc; 
        let h32 = document.createElement('h3');
        cardDiv.append(h32);
        h32.innerText += "OMKRETS";
        let h33 = document.createElement('h3');
        cardDiv.append(h33);
        h33.innerText += "KM FRÅN SOLEN";
        let h34 = document.createElement('h3');
        cardDiv.append(h34);
        h34.innerText += "MAX TEMPERATUR";
        let h35 = document.createElement('h3');
        cardDiv.append(h35);
        h35.innerText += "MÅNAR";
       
             
            console.log(data.bodies[index].name,data.bodies[index].desc, data.bodies[index].circumference,data.bodies[index].latinName, data.bodies[index].type, data.bodies[index].distance,data.bodies[index].rotation ); });    
         
       }

  }
} 


const createSolarSystem = new CreateSolarSystem();
createSolarSystem.start();



const displayPlanetDetails = new DisplayPlanetDetails();
displayPlanetDetails.solaris();
  



 



  


//    for (let index = 0; index < alldivs.length; index++) {
//          // set an event listener for it
//          alldivs[index].addEventListener('click',function(){

//       //create a new div
//      var div2 =  document.createElement('div');
//       //giv that div an id of two
//       div2.setAttribute("id", "two");
//       //append the new div to the dom
//      this.parentNode.appendChild(div2);
//       //remove the clicked div
//    this.parentNode.remove()
//       this.parentNode.removeChild(this);
//   });
    
//    }
    