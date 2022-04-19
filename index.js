 let forms = document.getElementById('form');
forms.addEventListener('submit' ,function(e){
	 	e.preventDefault()
	})

	let bvN = document.querySelector("#bvn");
	bvN.addEventListener('keyup', function () {
		let u_times = document.querySelector('.u_times');
		let u_check = document.querySelector('.u_check');
		if(bvN.value.length == 0 || bvN.value.length < 10) {
			bvN.style.border = '1px solid red' ;
			u_times.style.display = 'block';
			u_check.style.display = 'none'; 
			return false;  
		} else{
			bvN.style.border = '1px solid green'
			u_check.style.display = 'block'
			u_times.style.display = 'none'
		}


		
	})

	let mobile = document.querySelector("#pmobile");
	mobile.addEventListener('keyup', function () {
		let u_times = document.querySelector('.p_times');
		let u_check = document.querySelector('.p_check');
		if(mobile.value.length == 0 || mobile.value.length < 11) {
			mobile.style.border = '1px solid red' ;
			u_times.style.display = 'block';
			u_check.style.display = 'none'; 
			return false;  
		} else{
			mobile.style.border = '1px solid green'
			u_check.style.display = 'block'
			u_times.style.display = 'none'
		}


		
	})

	let date = document.querySelector("#dob");
	date.addEventListener('keyup', function () {
		let u_times = document.querySelector('.d_times');
		let u_check = document.querySelector('.d_check');
		if(date.value !== 0 ) {
			date.style.border = '1px solid red' ;
			u_times.style.display = 'block';
			u_check.style.display = 'none'; 
			return false;  
		} else{
			date.style.border = '1px solid green'
			u_check.style.display = 'block'
			u_times.style.display = 'none'
		}


		
	})

     
	function validate(){
		if (bvN.value == 0 || bvN.value.length < 9) {
			document.getElementById("errorM").innerHTML = 'please fill the reguired field!'

	       return false;

		}else if(mobile.value == 0 || mobile.value.length < 11 ){
		    document.getElementById("errorM").innerHTML = 'please fill the reguired field!'

	        return false;

		} else if (date.value == 0){
              document.getElementById(".errorM").innerHTML = 'please fill the reguired field!'

	         return false;

		 }
		 else{
			let success = document.querySelector(".successM")
            success.innerHTML = 'successful'
            success.style.color = 'green'
            success.style.textAlign = 'center'
            success.style.padding = '10px' 
            success.style.fontSize = '18px'



		}
 	}
	// open without bvn

	
let email = document.querySelector("#email");
email.addEventListener('keyup', function(){
	let e_times = document.querySelector('.e_times');
	let e_check = document.querySelector('.e_check');
	let email_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
		if(emai.value.match(email_format)) {
			email.style.border = '1px solid green' ;
			e_times.style.display = 'none';
			e_check.style.display = 'block'; 
			return true;  
		} else{
			email.style.border = '1px solid red'
			e_check.style.display = 'none'
			e_times.style.display = 'block'
		}

})

let surname = document.querySelector("#surname");
	surname.addEventListener('keyup', function () {
		let s_times = document.querySelector('.s_times');
		let s_check = document.querySelector('.s_check');
		if(surname.value.length == 0 || surname.value.length < 4) {
			surname.style.border = '1px solid red' ;
			s_times.style.display = 'block';
			s_check.style.display = 'none'; 
			return false;  
		} else{
			surname.style.border = '1px solid green'
			s_check.style.display = 'block'
			s_times.style.display = 'none'
		}


		
	})

	let firstname = document.querySelector("#firstname");
	firstname.addEventListener('keyup', function () {
		let f_times = document.querySelector('.f_times');
		let f_check = document.querySelector('.f_check');
		if(firstname.value.length == 0 || firstname.value.length < 4) {
			firstname.style.border = '1px solid red' ;
			f_times.style.display = 'block';
			f_check.style.display = 'none'; 
			return false;  
		} else{
			firstname.style.border = '1px solid green'
			f_check.style.display = 'block'
			f_times.style.display = 'none'
		}


		
	});


	let lastname = document.querySelector("#lastname");
	lastname.addEventListener('keyup', function () {
		let l_times = document.querySelector('.l_times');
		let l_check = document.querySelector('.l_check');
		if(lastname.value.length == 0 || lastname.value.length < 4) {
			lastname.style.border = '1px solid red' ;
			l_times.style.display = 'block';
			l_check.style.display = 'none'; 
			return false;  
		} else{
			lastname.style.border = '1px solid green'
			l_check.style.display = 'block'
			l_times.style.display = 'none'
		}


		
	})
 
	
let tag = document.querySelectorAll("#tab");
let button2 = document.querySelector("#nextBtn");
let button = document.querySelector("#prevBtn");
let p = document.querySelectorAll(".par");
let forms2 = document.getElementById('form3')[0];


     
    
     let currentTab = 0
     tag[currentTab].style.display = "block";
     if(currentTab == 0){
     	button.style.display = "none";
     	p[0].style.backgroundColor = "red";
     }

     button2.addEventListener('click',function(e){
     	e.preventDefault()
     	currentTab++;
     	let backDiv  = currentTab -1;
     	if((currentTab > 0) && (currentTab < 3)){
     		button.style.display = "block";
     		tag[currentTab].style.display = "block";
     		tag[backDiv].style.display = "none";
     		p[currentTab].style.backgroundColor = "red";
     		p[backDiv].style.backgroundColor = "#ededed";
     		if(currentTab == 2){
     			button2.style.display = "none";
     		}
     		

     	}
     	
     })
     
button.addEventListener('click',function(e){
	e.preventDefault()
	if(currentTab > 0 ){
		currentTab--;
		let backDiv = currentTab +1;
		    tag[currentTab].style.display = "block";
     		tag[backDiv].style.display = "none";
     		p[currentTab].style.backgroundColor = "red";
     		p[backDiv].style.backgroundColor = "#ededed";
     	if (currentTab < 2){
     			button2.style.display = "block";
     		}

	}
	 if (currentTab == 0){
 	button.style.display ="none";
 	button2.style.display= "block";
   }   

})
// style of forms

let openBvn = document.querySelector("#open-with");
let withoutBvn = document.querySelector("#open-without");
let anchopen = document.querySelector("#aOpen");
let anchowithout = document.querySelector("#aWithout");
let formss2 = document.getElementById('open');
let formss = document.getElementById('form3');



  openBvn.addEventListener('click', function(){
  	formss2.style.display = "block";
  	formss.style.display = "none";
  	withoutBvn.style.backgroundColor = "white";
  	openBvn.style.backgroundColor = "red";
  	anchopen.style.color = "white";
  	anchowithout.style.color = "black";

  });
  	
  	

  

  withoutBvn.addEventListener('click', function(){
  	withoutBvn.style.backgroundColor = "red";
  	openBvn.style.backgroundColor = "white";
  	anchopen.style.color = "black";
  	anchowithout.style.color = "white";
    formss2.style.display = "none";
  	formss.style.display = "block";
  	
  });
  	
// file upload
  let uploadButton = document.getElementById("upload-button");
	let chosenImage = document.getElementById("chosen-Image");
	let fileName = document.getElementById("file-name");

	uploadButton.onchange = () => {
		let reader = new FileReader();
		reader.readAsDataURL(uploadButton.files[0]);
		reader.onload = () => {
			chosenImage.setAttribute("src",reader.result);
		}
		 // fileName.textContent = uploadButton.files[0].name;
	}
  	
  let upload2 = document.querySelector("#upload-button2");
	let input2 = document.querySelector("#chosen-Image2");

	upload2.onchange = () => {
		let reader2 = new FileReader();
		reader2.readAsDataURL(upload2.files[0]);
		reader2.onload = () => {
			input2.setAttribute("src",reader2.result);
		}
		// fileName2.textContent = upload2.files[0].name;
	}
