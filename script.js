// 1. Brain / Neural Network Flowing Particle Configuration
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 75,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": ["#00e5ff", "#ff007f", "#7b2cbf"] },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 140,
      "color": "#00e5ff",
      "opacity": 0.35,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 1.8,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 180, "line_linked": { "opacity": 0.8 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

// 2. Calculator Logic & Shake Effect
const display = document.getElementById('result');
const calculator = document.getElementById('calculator');

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    triggerShake();
  });
});

function triggerShake() {
  calculator.classList.remove('shake');
  void calculator.offsetWidth;
  calculator.classList.add('shake');
}

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.trim() === '') return;
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
    setTimeout(() => clearDisplay(), 1200);
  }
}
