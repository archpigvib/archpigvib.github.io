
const alizarin = document.getElementById('alizarin');
alizarin.onclick = function() {
  dataPath = '../data/Alizarin.CSV'
  graphTitle = 'Alizarin Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  var img = document.createElement("img");
  img.src = "../img/Alizarin.png";
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  document.getElementById("structure").appendChild(img);
  loadData();
  setTimeout(plotGraph,500);
};

const azurit = document.getElementById('azurit');
azurit.onclick = function() {
  dataPath = '../data/Azurit.CSV'
  graphTitle = 'Azurite Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const brazilein = document.getElementById('brazilein');
brazilein.onclick = function() {
  dataPath = '../data/Brazilein.CSV'
  graphTitle = 'Brazilein Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  var img = document.createElement("img");
  img.src = "../img/Brazilein.png";
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  document.getElementById("structure").appendChild(img);
  loadData();
  setTimeout(plotGraph,500);
};

const chrysin = document.getElementById('chrysin');
chrysin.onclick = function() {
  dataPath = '../data/Chrysin.CSV'
  graphTitle = 'Chrysin Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  var img = document.createElement("img");
  img.src = "../img/Chrysin.png";
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  document.getElementById("structure").appendChild(img);
  loadData();
  setTimeout(plotGraph,500);
};

const draciKrev = document.getElementById('draci krev');
draciKrev.onclick = function() {
  dataPath = '../data/Dračí_krev.CSV'
  graphTitle = "Dragon's Blood Raman";
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const indigo = document.getElementById('indigo');
indigo.onclick = function() {
  dataPath = '../data/Indigo.CSV'
  graphTitle = 'Indigo Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  var img = document.createElement("img");
  img.src = "../img/Indigo.png";
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  document.getElementById("structure").appendChild(img);
  loadData();
  setTimeout(plotGraph,500);
};

const kamenec = document.getElementById('kamenec');
kamenec.onclick = function() {
  dataPath = '../data/Kamenec.CSV'
  graphTitle = 'Alum Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const karmin = document.getElementById('karmin');
karmin.onclick = function() {
  dataPath = '../data/Karmin.CSV'
  graphTitle = 'Carmine Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  var img = document.createElement("img");
  img.src = "../img/Carminic acid.png";
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  document.getElementById("structure").appendChild(img);
  loadData();
  setTimeout(plotGraph,500);
};

const laka = document.getElementById('laka');
laka.onclick = function() {
  dataPath = '../data/Laka.CSV'
  graphTitle = 'Lac dye Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  var img = document.createElement("img");
  img.src = "../img/Laccaic acidA.png";
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  document.getElementById("structure").appendChild(img);
  loadData();
  setTimeout(plotGraph,500);
};

const lapl = document.getElementById('lapl');
lapl.onclick = function() {
  dataPath = '../data/Lapis_lazuli.CSV'
  graphTitle = 'Lapis lazuli Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const malachit = document.getElementById('malachit');
malachit.onclick = function() {
  dataPath = '../data/Malachit.CSV'
  graphTitle = 'Malachite Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const manganovaCern = document.getElementById('manganova cern');
manganovaCern.onclick = function() {
  dataPath = '../data/Manganova_cern.CSV'
  graphTitle = 'Manganese black Raman';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const purpurin = document.getElementById('Purpurin');
purpurin.onclick = function() {
  dataPath = '../data/Purpurin.CSV'
  graphTitle = 'Purpurin Raman';
  document.getElementById('about').style.visibility = 'collaphiddense';
  document.getElementById('about').style.display = 'none';
  var img = document.createElement("img");
  img.src = "../img/Purpurin.png";
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  document.getElementById("structure").appendChild(img);
  loadData();
  setTimeout(plotGraph,500);
};

const quercetin = document.getElementById('quercetin');
quercetin.onclick = function() {
  dataPath = '../data/Quercetin.CSV'
  graphTitle = 'Quercetin Raman';
  document.getElementById('about').style.visibility = 'collaphiddense';
  document.getElementById('about').style.display = 'none';
  var img = document.createElement("img");
  img.src = "../img/Quercetin.png";
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  document.getElementById("structure").appendChild(img);
  loadData();
  setTimeout(plotGraph,500);
};

function loadData() {
  data = [];
  x = [];
  y = [];
  Papa.parse(dataPath, {
    header: true,
    delimiter: ";",
    download: true,
    dynamicTyping: true,
    transfrom:parseFloat,
    complete: function(results) {
    data = results.data;
  }
 });
}; 

function plotGraph() {
  data.forEach(e => {
    x.push(e.x);
    y.push(e.y);
  }); 
  TESTER = document.getElementsByClassName('graph')[0];
var layout = {
  title: graphTitle,
  xaxis: {
    title: 'Raman shift (cm-1)',
    showgrid: false,
    zeroline: false,
    range: [100,2000]
  },
  yaxis: {
    title: 'Intensity (AU)',
    showline: false
  }
};
Plotly.newPlot( TESTER, [{
      x: x,
      y: y }], 
    layout, {
        margin: { t: 0 } });
    };
