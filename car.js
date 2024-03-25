document.addEventListener('DOMContentLoaded', function () {
    var researchToggle = document.getElementById('researchToggle');
    var researchPhases = document.getElementById('researchPhases');
    var b2bToggle = document.querySelector('#researchPhases > li:nth-child(2) ul > li:nth-child(1) > a');
    var b2bPhases = document.getElementById('b2bPhases');
  
    // Hide research phases initially
    researchPhases.style.display = 'none';
  
    // Hide B2B sub-phases initially
    b2bPhases.style.display = 'none';
  
    // Toggle visibility of research phases when "Research" is clicked
    researchToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (researchPhases.style.display === 'none') {
        researchPhases.style.display = 'block';
      } else {
        researchPhases.style.display = 'none';
      }
    });
  
    // Toggle visibility of B2B sub-phases when "B2B" is clicked
    b2bToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (b2bPhases.style.display === 'none') {
        b2bPhases.style.display = 'block';
      } else {
        b2bPhases.style.display = 'none';
      }
    });
  });
  


  document.addEventListener('DOMContentLoaded', function () {
    var PlanningToggle = document.getElementById('PlanningToggle');
    var PlanningPhases = document.getElementById('PlanningPhases');
  
    // Hide Planning phases initially
    PlanningPhases.style.display = 'none';
  
    // Toggle visibility of Planningphases when "Planning" is clicked
    PlanningToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (PlanningPhases.style.display === 'none') {
        PlanningPhases.style.display = 'block';
      } else {
        PlanningPhases.style.display = 'none';
      }
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    var DesigingToggle = document.getElementById('DesigingToggle');
    var DesigingPhases = document.getElementById('DesigingPhases');
  
    // Hide Planning phases initially
    DesigingPhases.style.display = 'none';
  
    // Toggle visibility of Planningphases when "Planning" is clicked
    DesigingToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (DesigingPhases.style.display === 'none') {
        DesigingPhases.style.display = 'block';
      } else {
        DesigingPhases.style.display = 'none';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var ManufacturingToggle = document.getElementById('ManufacturingToggle');
    var ManufacturingPhases = document.getElementById('ManufacturingPhases');
  
    // Hide Planning phases initially
    ManufacturingPhases.style.display = 'none';
  
    // Toggle visibility of Planningphases when "Planning" is clicked
    ManufacturingToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (ManufacturingPhases.style.display === 'none') {
        ManufacturingPhases.style.display = 'block';
      } else {
        ManufacturingPhases.style.display = 'none';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var SalesToggle = document.getElementById('SalesToggle');
    var SalesPhases = document.getElementById('SalesPhases');
  
    // Hide Planning phases initially
    SalesPhases.style.display = 'none';
  
    // Toggle visibility of Planningphases when "Planning" is clicked
    SalesToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (SalesPhases.style.display === 'none') {
        SalesPhases.style.display = 'block';
      } else {
        SalesPhases.style.display = 'none';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var b2bToggle = document.getElementById('b2bToggle');
    var b2bPhases = document.getElementById('b2bPhases');
  
    // Hide Planning phases initially
    b2bPhases.style.display = 'none';
  
    // Toggle visibility of Planningphases when "Planning" is clicked
    b2bToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (b2bPhases.style.display === 'none') {
        b2bPhases.style.display = 'block';
      } else {
        b2bPhases.style.display = 'none';
      }
    });
  });