const pointsChartContainer = document.getElementById('points__chart__container');
const pointsChartEl = document.getElementById('points__chart');
const profileContainer = document.getElementById('profile');
const sidebar = document.getElementById('sidebar')
const pointsChart = echarts.init(pointsChartEl);



gsap.from(profileContainer, {
  duration: 1,
  x: 50,
  opacity: 0,
  scale: 0,
  ease: "power4.inOut"
});

gsap.from(pointsChartContainer, {
  duration: 1,
  x: 50,
  opacity: 0,
  scale: 0,
  ease: "power4.inOut"
});

gsap.from(sidebar, {
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'power4.inOut'
})





const option = {
  title: { 
    text: 'Completed Points',
    top: '15%',
    left: 'center',
    textStyle: { color: '#7b7194', fontSize: 24, fontFamily: 'Urbanist', fontWeight: 400}
  },
  tooltip: {
  show: true,
  formatter: function (params) {
    const max = 1245; // o el valor que hayas definido
    const value = params.value;
    const faltan = max - value;
    return `
      <div style="font-family: Urbanist; font-size: 14px;">
        <strong>${value}%</strong> completado<br>
        <span style="color:#7b7194;">Faltan ${faltan} puntos para llegar al 100%</span>
      </div>
    `;
    },
    backgroundColor: 'rgba(26,20,35,0.9)',
    borderColor: '#FF6EC7',
    borderWidth: 1,
    padding: 10,
    textStyle: { color: '#fff' },
  },
  series: [
    // SUBFONDO (gris)
    {
      type: 'gauge',
      center: ['50%','75%'],
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1245,
      radius: '90%',
      pointer: { show: false },
      progress: { show: false },
      detail: { show: false },
      axisLine: {
        lineStyle: {
          width: 15,
          color: [[1, '#7b7194']],
          opacity: 0.4,  // fondo gris
          roundCap: true
        }
      },
      axisLabel: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      z: 1 // capa inferior
    },
    // PROGRESO REAL
    {
      type: 'gauge',
      center: ['50%','75%'],
      name: 'Progreso',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 100,
      radius: '90%',
      progress: {
        show: true,
        roundCap: true,
        width: 15,
        itemStyle: {
          color: '#1a1423'
        }
      },
      axisLine: { lineStyle: { width: 15, color: [[1, 'transparent']] } },
      pointer: {
        show: true,
        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
        width: 16,
        length: '75%',
        offsetCenter: [0, '0%'],
        itemStyle: { color: '#FF6EC7' },
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}%',
        fontSize: 38,
        fontFamily: 'Urbanist',
        color: '#1a1423',
        offsetCenter: [0, '30%'], // un poco más abajo del centro
        fontWeight: '500',
      },
      axisLabel: { show: false},
      splitLine: { show: false },
      axisTick: { show: false },
      data: [{ value: 100 }],
      z: 2 // capa superior
    }
  ]
};

pointsChart.setOption(option);