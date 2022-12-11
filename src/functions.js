function loadData() {
    data = [];
    x = [];
    y = [];
    Papa.parse(dataPath, {
      header: true,
      delimiter: ";",
      download: true,
      dynamicTyping: true,
      transfrom: parseFloat,
      complete: function (results) {
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
        range: [100, 2000]
      },
      yaxis: {
        title: 'Intensity (AU)',
        showline: false
      }
    };
    Plotly.newPlot(TESTER, [{
      x: x,
      y: y
    }],
      layout, {
      margin: { t: 0 }
    });
  };