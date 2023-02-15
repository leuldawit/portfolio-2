
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
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        
      }
    }
  }
  function move5() {
    var elem = document.getElementById("bar5");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 94) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        
      }
    }
  }
  function move6() {
    var elem = document.getElementById("bar6");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 86) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        
      }
    }
  }

  function move7() {
    var elem = document.getElementById("bar7");   
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
  function move8() {
    var elem = document.getElementById("bar8");   
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
        move5();
        move6();
        move7();
        move8();
      }
      
    });
  });
  
  observer.observe(document.querySelector('.skill-container'));
      
  function changeTox(x) {
    var menu=document.getElementById("hamburger");
    var items=document.getElementById("nav-items");
    x.classList.toggle("change");
    
      if(menu.style.display=='none' ) {
        menu.style.display="block" ;
        items.classList.toggle("change");
      } 
      else { 
        items.classList.toggle("change"); 
      }
    }

    function scrolltohome(){
      document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  
  }
    function scrolltoprojects() {
      var elem = document.getElementById("projectspage");
      elem.scrollIntoView();
      
    }
    function scrolltoabout() {
      var elem = document.getElementById("aboutpage");
      elem.scrollIntoView();
    }
    function scrolltocontacts() {
      var elem = document.getElementById("contactspage");
      elem.scrollIntoView();
    }