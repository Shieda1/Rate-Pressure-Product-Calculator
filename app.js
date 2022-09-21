// https://www.omnicalculator.com/health/rate-pressure-product

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ratepressureproductRadio = document.getElementById('ratepressureproductRadio');
const maxheartrateRadio = document.getElementById('maxheartrateRadio');
const maxsystolicbloodpressureRadio = document.getElementById('maxsystolicbloodpressureRadio');

let ratepressureproduct;
let maxheartrate = v1;
let maxsystolicbloodpressure = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ratepressureproductRadio.addEventListener('click', function() {
  variable1.textContent = 'Max heart rate';
  variable2.textContent = 'Max systolic blood pressure';
  maxheartrate = v1;
  maxsystolicbloodpressure = v2;
  result.textContent = '';
});

maxheartrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Rate-pressure product';
  variable2.textContent = 'Max systolic blood pressure';
  ratepressureproduct = v1;
  maxsystolicbloodpressure = v2;
  result.textContent = '';
});

maxsystolicbloodpressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Rate-pressure product';
  variable2.textContent = 'Max heart rate';
  ratepressureproduct = v1;
  maxheartrate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ratepressureproductRadio.checked)
    result.textContent = `Rate-pressure product = ${computeratepressureproduct().toFixed(2)}`;

  else if(maxheartrateRadio.checked)
    result.textContent = `Max heart rate = ${computemaxheartrate().toFixed(2)}`;

  else if(maxsystolicbloodpressureRadio.checked)
    result.textContent = `Max systolic blood pressure = ${computemaxsystolicbloodpressure().toFixed(2)}`;
})

// calculation

function computeratepressureproduct() {
  return Number(maxheartrate.value) * Number(maxsystolicbloodpressure.value);
}

function computemaxheartrate() {
  return Number(ratepressureproduct.value) / Number(maxsystolicbloodpressure.value);
}

function computemaxsystolicbloodpressure() {
  return Number(ratepressureproduct.value) / Number(maxheartrate.value);
}