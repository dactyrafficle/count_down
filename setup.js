
let my_date = '2022-09-24';
let my_time = "16:55";
let target_date_time = new Date(my_date + "T" + my_time + ":00.000-04:00");


(function() {

  let box;
  let animation_container;
  
  window.addEventListener('load', function() {
    
    box = new Box();
    animation_container = document.getElementById('animation_container');
    animation_container.appendChild(box.RETURN_CONTAINER());

    // INITIALIZE
    box.RESIZE_BOX(window.innerWidth*0.95, window.innerHeight*0.95);
    box.RANGE_X(0, 100);          
    box.RANGE_Y(0, 100);
  
    // SHOW GRIDLINES 
    box.LINE_WIDTH(1);
    box.STROKE_STYLE('#ddd');
    box.SHOW_GRID_X(10);
    box.SHOW_GRID_Y(10);
  
  }); // closing window.onload()
  
  window.addEventListener('resize', function() {
    
    // INITIALIZE
    box.RESIZE_BOX(window.innerWidth*0.95, window.innerHeight*0.95);
    box.RANGE_X(0, 100);          
    box.RANGE_Y(0, 100);
    
    // SHOW GRIDLINES 
    box.LINE_WIDTH(1);
    box.STROKE_STYLE('#ddd');
    box.SHOW_GRID_X(10);
    box.SHOW_GRID_Y(10);
    
  }); // closing window.resize()
  
})(); // closing anon()



/*
(function() {
  
  let main, box;
  
  window.addEventListener('load', function() {
    
    main = document.getElementById('main');
    main.style.top = 0;
    main.style.left = 0;
    main.style.width = window.innerWidth + 'px';
    main.style.height = window.innerHeight + 'px';
    
    box = document.getElementById('box');
    
    let border_width = 0.02*window.innerWidth;
    let line_width = 2;
    
    box.style.width = (window.innerWidth - 2*border_width - 2*line_width) + 'px';
    box.style.height = (window.innerHeight - 2*border_width - 2*line_width) + 'px';
    box.style.top = border_width + 'px';
    box.style.left = border_width + 'px';
    box.style.border = line_width + 'px solid #7b79';
    // correct height
    
  }); // closing window.onload
  
})(); // closing anon

*/

window.addEventListener('load', function() {

  document.getElementById('destination_time').innerHTML = my_date + '-' + my_time + ' EST (GMT-0400)';

  let d_ms_output = document.getElementById('d_ms_output');
  let d_s_output = document.getElementById('d_s_output');
  let d_min_output = document.getElementById('d_min_output');
  let d_hrs_output = document.getElementById('d_hrs_output');
  let n_days_output = document.getElementById('n_days_output');
  
  window.setInterval(function() {

    let t_1 = new Date();

    let d_ms = abc(t_1, target_date_time);

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