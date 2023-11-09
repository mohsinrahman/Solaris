
async function Solaris() {
    let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
    method: "GET",
    headers: { "x-zocom": "solaris-1Cqgm3S6nlMechWO" },
});

const data = await resp.json();
    console.log(data);
  }

  Solaris();
  
  


  


