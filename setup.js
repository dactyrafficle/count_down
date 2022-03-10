
(function() {
  
  let main, box;
  
  window.addEventListener('load', function() {
    
    main = document.getElementById('main');
    main.style.top = 0;
    main.style.left = 0;
    main.style.width = window.innerWidth + 'px';
    main.style.height = window.innerHeight + 'px';
    
    box = document.getElementById('box');
    box.style.width = (0.98*window.innerWidth - 4) + 'px';
    box.style.height = (0.98*window.innerHeight - 4) + 'px';
    box.style.top = 0.01*window.innerWidth + 'px';
    box.style.left = 0.01*window.innerWidth + 'px';
    box.style.border = '2px solid #7b79';
    
    
  }); // closing window.onload
  
})(); // closing anon


let t_2 = new Date(2022, 2, 16, 17, 30, 0, 0);

let d_ms_output, d_s_output;

window.addEventListener('load', function() {

  d_ms_output = document.getElementById('d_ms_output');
  d_s_output = document.getElementById('d_s_output');
  d_min_output = document.getElementById('d_min_output');
  d_hrs_output = document.getElementById('d_hrs_output');
  n_days_output = document.getElementById('n_days_output');
  
  window.setInterval(function() {

    let t_1 = new Date();

    let d_ms = abc(t_1, t_2);

    d_ms_output.innerHTML = d_ms.toFixed(3);
    d_s_output.innerHTML = (d_ms / 1000).toFixed(3);
    d_min_output.innerHTML = (d_ms / (1000 * 60)).toFixed(3);
    d_hrs_output.innerHTML = (d_ms / (1000 * 60 * 60)).toFixed(3);
    n_days_output.innerHTML = (d_ms / (1000 * 60 * 60 * 24)).toFixed(3);
  
  }, 1000/30);

});



function abc(t_1, t_2) {

  let ms_1 = t_1.getTime();
  let ms_2 = t_2.getTime();
  let d_ms = ms_2 - ms_1;
  
  return d_ms;
}