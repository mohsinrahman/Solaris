
// class to render solar system
class CreateSolarSystem {
    constructor() {  } 

    // Start Function render the first page
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
            
        let planet = planetData;
        
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
                
                planet[index].name.append(ellipseDiv);
                ellipseDiv.style.borderTop= "solid";
                ellipseDiv.style.rotate= "-27deg";
                ellipseDiv.style.filter= "blur(2px)";
                ellipseDiv.style.width = "148px";
                ellipseDiv.style.borderColor = "white";
                ellipseDiv.style.marginTop="50%";

            }
            
        }
        for (let index = 0; index < planet.length; index++) {
            mainDiv.appendChild(planet[index].name);    
        }
    };
    getPlanetData();
  }
}

// class to display planet information
class DisplayPlanetDetails {
    constructor() { 
     
     } 
// solaris function that fetch data through api
    async solaris() {
        let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: "GET",
        headers: { "x-zocom": "solaris-1Cqgm3S6nlMechWO" },
    });
    const data = await resp.json();
    window.solaris = data.bodies;

    

    

  
   for(let index = 0; index < data.bodies.length; index++) {
       
                
         let clickPlanet = document.getElementById(data.bodies[index].name);
        
         clickPlanet.addEventListener('click', function(){ 
            
         this.parentNode.remove()
        //  this.parentNode.removeChild(this);
         let mainDiv = document.createElement('div');
        mainDiv.style.cssText = 'line-height:1.1;position:fixed;width:100%;height:100%;z-index:100;display: grid; grid-template-columns: 1fr 3fr; grid-gap: 2px;justify-items: center; align-items: center; background: linear-gradient(to left, #0C164D 0%, #190B22 100%); text-align: justify; font-family: Arial, Helvetica, sans-serif; font-size: 16px; ';
        document.body.append(mainDiv);
        let backToMainPage = document.createElement("button");
        backToMainPage.style.width = 50+"px";
        backToMainPage.style.height = 50+"px";
        backToMainPage.innerText = "<<";
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
        let h11 = document.createElement('h1');
        cardDiv.append(h11);
        h11.style.textTransform = "uppercase";
        h11.style.fontSize = "bold";
        h11.style.letterSpacing = "5px";
        h11.innerHTML += data.bodies[index].name;
        let h31Latin = document.createElement('h3');
        cardDiv.append(h31Latin);
        h31Latin.style.textTransform = "uppercase";
        h31Latin.style.letterSpacing = "5px";
        h31Latin.style.color= "#FFD029";
        h31Latin.innerHTML += data.bodies[index].latinName;  
        let p = document.createElement('p');
        cardDiv.append(p);
        cardDiv.style.letterSpacing = "1px";
        p.innerHTML += data.bodies[index].desc;

        let hr1 = document.createElement('hr');
        cardDiv.append(hr1);
        hr1.style.backgroundColor= "#fff";
        hr1.style.padding= "0";
        hr1.style. border= "0";
        hr1.style.height= "1px";
        hr1.style.width= "100%";

        let GridDiv = document.createElement('div');
        cardDiv.append(GridDiv);
        GridDiv.style.display= "grid";
        GridDiv.style.gridTemplateColumns= "1fr 1fr";
        GridDiv.style.gridGgap= "10px";


        let section1 = document.createElement('section');
        GridDiv.append(section1);
        let h32 = document.createElement('h3');
        section1.append(h32);
        h32.innerText += "OMKRETS";
        let p33 = document.createElement('p');
        section1.append(p33);
        p33.innerHTML += data.bodies[index].circumference +" KM";

        let section2 = document.createElement('section');
        GridDiv.append(section2);
        let h34 = document.createElement('h3');
        section2.append(h34);
        h34.innerText += "KM FRÅN SOLEN";
        let p35 = document.createElement('p');
        section2.append(p35);
        p35.innerHTML += data.bodies[index].distance +" KM";

        let section3 = document.createElement('section');
        GridDiv.append(section3);
        let h36 = document.createElement('h3');
        section3.append(h36);
        h36.innerText += "MAX TEMPERATUR";
        let p37 = document.createElement('p');
        section3.append(p37);
        p37.innerHTML += data.bodies[index].temp.day +"C";

        let section4 = document.createElement('section');
        GridDiv.append(section4);
        let h38 = document.createElement('h3');
        section4.append(h38);
        h38.innerText += "MIN TEMPERATUR";
        let p39 = document.createElement('p');
        section4.append(p39);
        p39.innerHTML += data.bodies[index].temp.night +"C";

        let hr2 = document.createElement('hr');
        cardDiv.append(hr2);
        hr2.style.backgroundColor= "#fff";
        hr2.style.padding= "0";
        hr2.style. border= "0";
        hr2.style.height= "1px";
        hr2.style.width= "100%";

        let h311 = document.createElement('h3');
        cardDiv.append(h311);
        h311.innerText += "MÅNAR";
        let p312 = document.createElement('p');
        cardDiv.append(p312);
        if(data.bodies[index].moons.length > 0){
            
            for (let i = 0; i < data.bodies[index].moons.length; i++) {
                
                p312.innerHTML += data.bodies[index].moons[i] + " - ";                
            }
           
        }
        else {
            p312.innerHTML += "NA";
        }
        
       
             
 
        });    
         
       }

  }
} 


const createSolarSystem = new CreateSolarSystem();
createSolarSystem.start();



const displayPlanetDetails = new DisplayPlanetDetails();
displayPlanetDetails.solaris();
  



 



    