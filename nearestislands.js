function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

function nearestIslands(lat, lon, unit, num) {
    for (let i = 0; i < newIslands.length; i++) {
        distances.push(distance(lat, lon, newIslands[i].lat, newIslands[i].lon, unit));
    }
    for (let i = 0; i < newIslands.length; i++) {
        newIslands[i].dist = distances[i];
    }
    newIslands.sort(function(a, b) {
        if (a.dist > b.dist) {
            return 1
        }
        else {
            return -1;
        }
    });
    newIslands = newIslands.slice(0, num);
    let u = "Miles";
    switch (unit) {
        case "M":
            u = "Miles";
            break;
        case "K":
            u = "Kilometres";
            break;
        case "N":
            u = "Miles Nautiques";
            break;    
    }
    document.getElementById("nearestIslandsBody").childNodes[0].remove();
    let ul = document.createElement("ul");
    ul.setAttribute("style", "list-style-type: none");
    for (let i = 0; i < newIslands.length; i++) {
        let li = document.createElement("li");
        let h4 = document.createElement("h4");
        h4.setAttribute("style", "color: #052e47");
        let j = i + 1;
        h4.innerHTML = "<span style='color: #094d77'>" + j + "- " + "</span>" + newIslands[i].name + "<span style='color: #003311'>" + " (" + newIslands[i].dist.toFixed(4) + " " + u + ")" + "</span>";
        li.appendChild(h4);
        ul.appendChild(li);
    }
    document.getElementById("nearestIslandsBody").appendChild(ul);
    
    newIslands = islands;
    distances = [];
    u = "Miles";
}

// GPS

function setPosition(position) {
  document.getElementById("lat").value = position.coords.latitude;
  document.getElementById("lon").value = position.coords.longitude;
  document.getElementById("findLatLon").click();
}

function GPS() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

document.getElementById("gps").addEventListener("click", GPS);



