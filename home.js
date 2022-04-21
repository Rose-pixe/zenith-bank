let button1 = document.getElementById("search");
let button2 = document.getElementById('search3');
let navlogo = document.querySelector('.logo-z');
let inputsearch = document.querySelector('.input-B')
    
    button1.addEventListener('click' , function () {
      let nav = document.querySelector('.navigate');
      let menu = document.querySelector('.ulmenu');
      let body = document.getElementById('body');
      let section = document.querySelector('.firstnav')
      button1.style.display = "none"
      button2.style.display = "block"
      button2.style.marginLeft = "1050px"
      button2.style.backgroundColor = "black"
      button2.style.border = "1px solid #cccc"
      nav.style.display = "none"
      menu.style.display = "none"
      body.style.backgroundColor = "black"
      body.style.opacity = "0.7"
      navlogo.style.backgroundColor = "white"
      navlogo.style.opacity = ""
      inputsearch.style.display = "block"
      inputsearch.style.opacity = ""

    });
    
     button2.addEventListener('click' , function () {
      let nav = document.querySelector('.navigate');
      let menu = document.querySelector('.ulmenu'); 
      let body = document.getElementById('body');
      button1.style.display = "block"
      button2.style.display = "none"
      button1.style.marginLeft = "180px"
      nav.style.display = "block"
      menu.style.display = "block"
      menu.style.display = "inline-flex"
      body.style.backgroundColor = "white"
      body.style.opacity = ""
      inputsearch.style.display = "none"
      navlogo.style.backgroundColor = ""
     
      
    });
     
     // responsive

     let tag1 = document.querySelector("#child-list1")
     let listMenu = document.querySelector("#list-menu")
     let tag3 = document.querySelector("#child-list3")
     let tag4 = document.querySelector('#child-list2')
     let tag5 = document.querySelector('#child-list4')
     let tag6 = document.querySelector('#child-list5')

     // listMenu.style.display = "none";
     // tag3.style.display = "none"
     // tag6.style.display = "none"

     tag1.addEventListener('click' , function(){
      if (listMenu.style.display =="none") {
        listMenu.style.display = "block";
      }else if(tag4.addEventListener('click', function(){
         tag3.style.display = "block";
      }));
      else if(tag5.addEventListener('click', function(){
        tag6.style.display = "block";

      }));
      else if(tag3.style.display =="block"){
        tag4.addEventListener('click', function(){
          tag3.style.display = "none"
          listMenu.style.display = "none"
        });
            
        }
      else if (tag6.style.display =="block") {
        tag5.addEventListener('click', function(){
          tag6.style.display = "none";
          listMenu.style.display = "none"
        });
      }
   else{
         listMenu.style.display = "none"
       }
     
     });
         // SME
     let tagmenu2 = document.querySelector("#smeMenu");
     let sme = document.querySelector("#list-menuSme2");
     let sme2 = document.querySelector("#child-listSme1");
     let sme3 = document.querySelector("#child-listSme2");
     let sme4 = document.querySelector("#child-listSme3");
     let sme5 = document.querySelector("#child-listSme4");

     tagmenu2.addEventListener("click", function(){
      if (sme.style.display =="none") {
        sme.style.display = "block";
      }else if(sme2.addEventListener("click", function(){
        sme3.style.display ="block";
      }));
      else if(sme4.addEventListener("click", function(){
        sme5.style.display = "block";
      }));
      else if(sme3.style.display =="block"){
        sme2.addEventListener("click", function(){
          sme3.style.display ="none"
          sme.style.display = "none"
        });
      }
      else if(sme5.style.display =="block"){
        sme4.addEventListener("click", function(){
          sme5.style.display = "none";
          sme.style.display = "none"
        });
      }else{
        sme.style.display = "none";
      }
      
     });

        // CORPORATE
    let corporate = document.querySelector("#corporate")
    let corporate1 = document.querySelector("#child-corporate2")

    corporate.addEventListener('click', function(){
      if (corporate1.style.display =="none") {
        corporate1.style.display = "block";
      }else{
        corporate1.style.display = "none"
      }
    });

      // MEDIA
  let media = document.querySelector("#media")
  let media1 = document.querySelector("#child-media")

media.addEventListener("click", function(){
  if (media1.style.display == "none") {
    media1.style.display = "block";
  }else {
    media1.style.display ="none";
  }
});


  // INVESTOR RELATION
 let investor = document.querySelector("#investor-R");
 let investor1 = document.querySelector("#child-investor1");
 let investor2 = document.querySelector("#child-investor2");
 let investor3 = document.querySelector("#child-investor3")
 
 investor.addEventListener("click", function(){
  if (investor1.style.display == "none") {
    investor1.style.display = "block";
  }else if(investor2.addEventListener("click", function(){
       investor3.style.display = "block";
  }));
  else if(investor3.style.display == "block"){
     investor2.addEventListener("click", function(){
       investor3.style.display = "none";
       investor1.style.display = "none";
     });
  }else{
    investor1.style.display = "none";
  }
 });

  // CSR
let csr = document.querySelector("#csr");
let csr1 = document.querySelector("#child-csr");

csr.addEventListener("click", function(){
  if (csr1.style.display == "none") {
    csr1.style.display = "block";
  }else{
    csr1.style.display = "none";
  }
});


// ABOUT US
let about = document.querySelector("#about");
let about1 = document.querySelector("#child-about");

about.addEventListener("click", function(){
  if (about1.style.display =="none") {
    about1.style.display = "block";
  }else {
    about1.style.display = "none";
  }
});



// responsive bar
let bar1 = document.querySelector(".responsive-bar");
let bar2 = document.querySelector(".responsive-close");
let bar3 = document.querySelector(".nested-list");
let allbar1 = document.querySelector(".bars1")
let allbar2 = document.querySelector(".bars2")
let allbar3 = document.querySelector(".bars3")
let allbar4 = document.querySelector(".bars4")
let allbar5 = document.querySelector(".bars5")


bar1.addEventListener("click", function(){
  bar3.style.display = "block";
  bar1.style.display = "none";
  bar2.style.display = "block"
  allbar2.style.display ="none"
  allbar3.style.display ="none"
  allbar4.style.display ="none"
  allbar5.style.display ="none"
});
bar2.addEventListener("click" , function(){
  bar3.style.display = "none";
  bar1.style.display = "block";
  bar2.style.display = "none"
  allbar2.style.display ="block"
  allbar3.style.display ="block"
  allbar4.style.display ="block"
  allbar5.style.display ="block"
});

// responsive search
let search1 = document.querySelector(".responsive-search")
let search2 = document.querySelector(".responsive-barclose")
let search3 = document.querySelector(".input-search")

search1.addEventListener("click", function(){
  search3.style.display = "block";
  search1.style.display ="none";
  search2.style.display ="block";
  allbar1.style.display ="none"
  allbar3.style.display ="none"
  allbar4.style.display ="none"
  allbar5.style.display ="none"
});
search2.addEventListener("click", function(){
  search3.style.display = "none";
  search1.style.display = "block";
  search2.style.display = "none";
  allbar1.style.display ="block"
  allbar3.style.display ="block"
  allbar4.style.display ="block"
  allbar5.style.display ="block"

})

// lock
let lock1 = document.querySelector(".responsive-lock");
let lock2 = document.querySelector(".responsive-lock-close");
let lock3 = document.querySelector("#internet-login");

lock1.addEventListener("click", function(){
  lock3.style.display = "block";
  lock1.style.display = "none";
  lock2.style.display = "block";
  allbar1.style.display ="none"
  allbar2.style.display ="none"
  allbar4.style.display ="none"
  allbar5.style.display ="none"
});

lock2.addEventListener("click", function(){
  lock3.style.display = "none";
  lock1.style.display = "block";
  lock2.style.display = "none";
  allbar1.style.display ="block"
  allbar2.style.display ="block"
  allbar4.style.display ="block"
  allbar5.style.display ="block"
})

// link
let link1 = document.querySelector(".responsive-link");
let link2 = document.querySelector(".responsive-link-close");
let link3 = document.querySelector(".ul-responsive");

link1.addEventListener("click", function(){
  link3.style.display = "block";
  link1.style.display = "none";
  link2.style.display = "block";
  allbar1.style.display ="none"
  allbar2.style.display ="none"
  allbar3.style.display ="none"
  allbar5.style.display ="none"
});

link2.addEventListener("click" , function(){
  link3.style.display = "none";
  link1.style.display = "block";
  link2.style.display = "none";
  allbar1.style.display ="block"
  allbar2.style.display ="block"
  allbar3.style.display ="block"
  allbar5.style.display ="block"
})

// NIGERIA
let chevronDown = document.querySelector("#chevron-down");
let selectCountry =document.querySelector(".select-country");

chevronDown.addEventListener("click", function(){
  if (selectCountry.style.display =="none") {
    selectCountry.style.display = "block";
    allbar5.style.width = "80%"
  }else{
    selectCountry.style.display = "none"
  }
});


// max-height link

// let firstLink = document.querySelector("#easyparen3");
// let section4 = document.querySelector(".section4");

// firstLink.addEventListener("mouseover", function( event ){
//   section4.style.marginTop = "0px";
//   section4.style.border = "1px solid red" 
// })`
 // 1
document.querySelector("#easyparent1").addEventListener("mouseover", function(){
  document.querySelector(".section3").style.height = "300px";
})

document.querySelector("#easyparent1").addEventListener("mouseout", function(){
  document.querySelector(".section3").style.height = "150px";
})

// 2
document.querySelector("#easyparent2").addEventListener("mouseover", function(){
  document.querySelector(".section3").style.height = "300px";

})

document.querySelector("#easyparent2").addEventListener("mouseout", function(){
  document.querySelector(".section3").style.height = "150px";
})

// 3
document.querySelector("#easyparent3").addEventListener("mouseover", function(){
  document.querySelector(".section3").style.height = "300px";
})

document.querySelector("#easyparent3").addEventListener("mouseout", function(){
  document.querySelector(".section3").style.height = "150px";
})

// 4
document.querySelector("#easyparent4").addEventListener("mouseover", function(){
  document.querySelector(".section3").style.height = "300px";
})

document.querySelector("#easyparent4").addEventListener("mouseout", function(){
  document.querySelector(".section3").style.height = "150px";
})