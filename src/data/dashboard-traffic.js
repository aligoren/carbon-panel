export default {
    type: 'line',
    data: {
        labels: [2016, 2017, 2018, 2019],
        datasets: [{ 
            data: [1113456, 1114212, 31150217, 11251],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [123456, 12134212, 1135217, 331251],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [1123456, 1124212, 235217, 121251],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [1314456, 1125212, 111217, 129251],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [1113456, 114212, 1115217, 311251],
            label: "North America",
            borderColor: "#c45850",
            fill: false
          }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
  }