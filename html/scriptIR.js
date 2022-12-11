
const alizarinIR = document.getElementById('alizarinIR');
alizarinIR.onclick = function() {
  dataPath = '../data/Alizarin_IR.CSV'
  graphTitle = 'Alizarin IR';
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

const azuritIR = document.getElementById('azuritIR');
azuritIR.onclick = function() {
  dataPath = '../data/Azurite_IR.CSV'
  graphTitle = 'Azurite IR';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const brazileinIR = document.getElementById('brazileinIR');
brazileinIR.onclick = function() {
  dataPath = '../data/Brazil_IR.CSV'
  graphTitle = 'Brazilein IR';
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

const chrysinIR = document.getElementById('chrysinIR');
chrysinIR.onclick = function() {
  dataPath = '../data/Chrysin_IR.CSV'
  graphTitle = 'Chrysin IR';
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

const draciKrevIR = document.getElementById('draci krevIR');
draciKrevIR.onclick = function() {
  dataPath = "../data/Dragon's_Blood_IR.CSV"
  graphTitle = "Dragon's Blood IR";
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const indigoIR = document.getElementById('indigoIR');
indigoIR.onclick = function() {
  dataPath = '../data/Indigo_IR.CSV'
  graphTitle = 'Indigo IR';
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

const kamenecIR = document.getElementById('kamenecIR');
kamenecIR.onclick = function() {
  dataPath = '../data/Alum_IR.CSV'
  graphTitle = 'Alum IR';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const karminIR = document.getElementById('karminIR');
karminIR.onclick = function() {
  dataPath = '../data/Carmine_IR.CSV'
  graphTitle = 'Carmine IR';
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

const lakaIR = document.getElementById('lakaIR');
lakaIR.onclick = function() {
  dataPath = '../data/Lac_Dye_IR.CSV'
  graphTitle = 'Lac dye IR';
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

const laplIR = document.getElementById('laplIR');
laplIR.onclick = function() {
  dataPath = '../data/Lapis_lazuli_IR.CSV'
  graphTitle = 'Lapis lazuli IR';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const malachitIR = document.getElementById('malachitIR');
malachitIR.onclick = function() {
  dataPath = '../data/Malachite_IR.CSV'
  graphTitle = 'Malachite IR';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const manganovaCernIR = document.getElementById('manganova cernIR');
manganovaCernIR.onclick = function() {
  dataPath = '../data/Manganese_black_IR.CSV'
  graphTitle = 'Manganese black IR';
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('about').style.display = 'none';
  while (document.getElementById("structure").firstChild) {
    document.getElementById("structure").removeChild(document.getElementById("structure").lastChild);
  };
  loadData();
  setTimeout(plotGraph,500);
};

const quercetinIR = document.getElementById('quercetinIR');
quercetinIR.onclick = function() {
  dataPath = '../data/Quercetin_IR.CSV'
  graphTitle = 'Quercetin IR';
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
