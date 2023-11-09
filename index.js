
class CreateSolarSystem {
    constructor() {  }
     start(){
        let mainDiv = document.createElement('div');
        mainDiv.style.cssText = 'position:absolute;width:100%;height:100%;z-index:100;display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-gap: 5px;justify-items: center; align-items: center; background: linear-gradient(to left, #0C164D 0%, #190B22 100%); padding: 10px;';
        document.body.append(mainDiv);
        let sun = document.createElement('div');
        let mercury = document.createElement('div');
        let venus = document.createElement('div');
        let earth = document.createElement('div');
        let mars = document.createElement('div');
        let jupiter = document.createElement('div');
        let saturn = document.createElement('div');
        let uranus = document.createElement('div');
        let neptune = document.createElement('div');

        sun.style.cssText = 'width:318px;height:600px;background:#FFD029; border-radius: 0px 740px 740px 0px; ';
        mercury.style.cssText = 'width:14px;height:14px;background:#888888; border-radius:50%';
        venus.style.cssText = 'width:26px;height:26px;background:#E7CDCD; border-radius:50%';
        earth.style.cssText = 'width:28px;height:28px;background:#428ED4; border-radius:50%';
        mars.style.cssText = 'width:14px;height:14px;background:#EF5F5F; border-radius:50%';
        jupiter.style.cssText = 'width:188px;height:188px;background:#E29468; border-radius:50%';
        saturn.style.cssText = 'width:144px;height:144px;background:#C7AA72; border-radius:50%';
        uranus.style.cssText = 'width:66px;height:66px;background:#C9D4F1; border-radius:50%';
        neptune.style.cssText = 'width:66px;height:66px;background:#7A91A7; border-radius:50%';
        mainDiv.appendChild(sun);
        mainDiv.appendChild(mercury);
        mainDiv.appendChild(venus);
        mainDiv.appendChild(earth);
        mainDiv.appendChild(mars);
        mainDiv.appendChild(jupiter);
        mainDiv.appendChild(saturn);
        mainDiv.appendChild(uranus);
        mainDiv.appendChild(neptune);

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
    console.log(data);
  }

  Solaris();



 



  


