Dropzone.autoDiscover = false;

function init() {

    let dz = new Dropzone("#my-awesome-dropzone", {
        url: "/",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Some Message",
        autoProcessQueue: false
    });
    
    dz.on("addedfile", function() {
		$('#errorMsg').hide();
		$('#solution').hide();
		$('#solutionHolder').hide();
		
        if (dz.files[1]!=null) {
            dz.removeFile(dz.files[0]);        
        }
    });

	dz.on("complete", function(file) {
        
		let imageData = file.dataURL;

		var solution = document.getElementById("solutionHolder");

		var url = "http://127.0.0.1:5000/solve"

		$.post(url, {image_data: imageData}, function(data, status) {
			
			console.log(data);

			if (!data || data.length==0 || data.solution==null) {
				$('#errorMsg').show();
            } else {
				solution.innerHTML = data.solution.toString()
				$('#solution').show();
				$('#solutionHolder').show();
			}

			console.log(status);

		})
	});

	$("#solveBtn").on('click', function (e) {
        dz.processQueue();		
    });
}


function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}



$(document).ready(function() {
	console.log("Page ready!");
	$('#solution').hide();
	$('#solutionHolder').hide();
	$('#error').hide();
	$('#errorMsg').hide();

	updateList();

	window.addEventListener('scroll', () => {
    updateList();});
	
	init();
})