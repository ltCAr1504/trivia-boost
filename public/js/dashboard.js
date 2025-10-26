const pointsChartContainer = document.getElementById('points__chart__container');
const pointsChartEl = document.getElementById('points__chart');
const profileContainer = document.getElementById('profile');
const sidebar = document.getElementById('sidebar')



gsap.from(profileContainer, {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power4.inOut"
});

gsap.from(pointsChartContainer, {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power4.inOut"
});

gsap.from(sidebar, {
  x: -100,
  duration: 1,
  opacity: 0,
  ease: 'power4.inOut'
})




const ctx = document.getElementById('skillsGraph').getContext('2d');

const colors = [
'#fb17f8','#fdc70c'
];

const categories = [
'Math','Science','Programming','History','Logic Lab','Literature'
];

const performances = [83, 70, 88, 76, 65,40];

    // Crear degradado lineal combinando todos los colores
    
const gradient = ctx.createLinearGradient(0, 0, 400, 400);
colors.forEach((c, i) => gradient.addColorStop(i / (colors.length - 1), c + '90')); // '33' = ~20% opacity

    
const data = {
      labels: categories,
      datasets: [
        {
          label: 'Rendimiento por categoría',
          data: performances,
          fill: true,
          backgroundColor: gradient,
          borderColor: gradient,
          borderWidth: 1,
          pointBackgroundColor: gradient,
          pointRadius: 5,
          tension: 0.2
        }
      ]
    };

    const options = {
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1c1c2b',
          titleColor: '#fff',
          bodyColor: '#ccc',
          borderWidth: 0,
          borderColor: '#666',
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.formattedValue}/100`;
            }
          }
        }
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            display: false,
            stepSize: 20,
            color: '#666',
            backdropColor: 'transparent',
            showLabelBackdrop: false
          },
          pointLabels: {
            color: '#1a1423',
            font: { size: 13, weight: '500', family: 'Urbanist', style: 'italic'}
          },
          grid: { color: 'rgba(150,150,150,.3)' },
          angleLines: { color: 'rgba(150,150,150,.3)'}
        }
      }
    };

    new Chart(ctx, {
      type: 'radar',
      data: data,
      options: options
    });