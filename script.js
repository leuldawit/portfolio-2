
function move1() {
    var elem = document.getElementById("bar1");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        
      }
    }
  }

  function move2() {
    var elem = document.getElementById("bar2");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
       
        
      }
    }
  }
  function move3() {
    var elem = document.getElementById("bar3");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        
      }
    }
  }
  function move4() {
    var elem = document.getElementById("bar4");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        
      }
    }
  }

  const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        move1();
        move2();
        move3();
        move4();
      }
      
    });
  });
  
  observer.observe(document.querySelector('.skill-container'));
      
  function changeTox(x) {
    var menu=document.getElementById("hamburger");
    var items=document.getElementsByClassName("nav-items");
    var item=document.getElementsByClassName("nav-item");
  x.classList.toggle("change");
    if(menu.style.display=='none') {
        menu.style.display="block" ;  
        
        
    } 
    }