 

fetch('https://api.spacexdata.com/v3/launches/latest')
.then(response => response.json())
.then(data => showLuanchInfo(data))
.then(json => console.log(json))


  
function showLuanchInfo(SpaceXData){

    const results = document.querySelector('#results');
    results.innerHTML = '';

    data = JSON.stringify(SpaceXData);
    data = JSON.parse(data);
    console.log(data);
        const div = document.createElement('div');
 
        div.innerHTML = `
   

        <div class="container">
        <div class="col-6 col-sm-4">Mission Name: ${data.mission_name}</div>
        <div class="col-6 col-sm-4">Launch Year: ${data.launch_year}</div>
        <div class="col-6 col-sm-4">Rocket Name : ${data.rocket.rocket_name}</div>
        <div class="col-6 col-sm-4">Rocket Type : ${data.rocket.rocket_type}</div>
        <div class="w-100 d-none d-md-block"></div>
        <div class="col-6 col-sm-4">Launch Site : ${data.launch_site.site_name_long}</div>
        </div>
        `;
    
    results.appendChild(div);
 
}