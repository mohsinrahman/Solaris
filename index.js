
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
            console.log(planet[index].name);
        }
        for (let index = 0; index < planet.length; index++) {
            mainDiv.appendChild(planet[index].name);    
        }

    
  

    };
    getPlanetData();
  }
}

  const ourSolarSystem = new CreateSolarSystem();
        ourSolarSystem.start();


async function Solaris() {
    let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
    method: "GET",
    headers: { "x-zocom": "solaris-1Cqgm3S6nlMechWO" },
});

const data = await resp.json();
    

  
    for(let index = 0; index < data.bodies.length; index++) {
       
                
         let div1 = document.getElementById(data.bodies[index].name);
        
         div1.addEventListener('click', function(){ console.log(data.bodies[index].name); });    

       }
      
       
       
       
    


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
    


  }

  Solaris();



 



  


