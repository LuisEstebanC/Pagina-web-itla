
/*function iniciarMap(){
	var coor = {lat:-34.5956145 ,lng: -58.4431949};
	var map = new google.maps.Map(document.getElementById('map'),{ 
		zoom:10, 
		center:coord
	});
}*/


        var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {maxZoom: 20, minZoom: 7});
        var map = L.map('map').setView([18.91668, -70.59814], 7).addLayer(osm);
       
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();

        L.marker([18.451074,-69.6627782]).addTo(map);


    
   