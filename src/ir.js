for (key in allIR) {
  document.getElementById(key).onclick = function () {
    key = this.id
    dataPath = allIR[key].dataPath;
    graphTitle = allIR[key].graphTitle;
    document.getElementById('about').style.visibility = 'hidden';
    document.getElementById('about').style.display = 'none';
    var img = document.createElement("img");
    img.src = allIR[key].imgPath;
    while (document.getElementById("structure").firstChild) {
      document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
    };
    document.getElementById("structure").appendChild(img);
    loadData(dataPath);
    setTimeout(plotGraph, 500);
  };
};

