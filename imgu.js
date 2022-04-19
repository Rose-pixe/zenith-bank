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
	let container = document.querySelector("#image-container2");
	let fileName2 = document.querySelector(".file-name2");

	upload2.onchange = () => {
		let reader2 = new FileReader();
		reader2.readAsDataURL(upload2.files[0]);
		reader2.onload = () => {
			input2.setAttribute("src",reader2.result);
		}
		// fileName2.textContent = upload2.files[0].name;
	}


 let button1 = document.getElementById("search");
 let button2 = document.getElementById('search3');
	 
	 button1.addEventListener('click' , function () {
	 	button1.style.display = "none"
	 	button2.style.display = "block"
	 	

	 	
	 });
	 
	  button2.addEventListener('click' , function () {
	 	button1.style.display = "block"
	 	button2.style.display = "none"
	 	

	 	
	 });
	 