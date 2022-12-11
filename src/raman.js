for (key in allCompounds) {
  document.getElementById(key).onclick = function () {
    key = this.id
    dataPath = allCompounds[key].dataPath;
    graphTitle = allCompounds[key].graphTitle;
    document.getElementById('about').style.visibility = 'hidden';
    document.getElementById('about').style.display = 'none';
    var img = document.createElement("img");
    img.src = allCompounds[key].imgPath;
    while (document.getElementById("structure").firstChild) {
      document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
    };
    document.getElementById("structure").appendChild(img);
    loadData(dataPath);
    setTimeout(plotGraph, 500);
  };
};
