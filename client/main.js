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
        if (dz.files[1]!=null) {
            dz.removeFile(dz.files[0]);        
        }
    });

	dz.on("complete", function (file) {
        let imageData = file.dataURL;

		var url = "http://127.0.0.1:8000/solve"

		$.post(url, {
			image_data: imageData
		}, function(data, status) {
			console.log(data.Solution);

			if(!data || data.length==0) {
				$('#error').show();
			} else {
				var solution = document.getElementById("solutionHolder");

				solution.innerHTML = "<p>" + data.Solution.toString() + "</p>";
				$('#solution').show();
				$('#solutionHolder').show();
			}

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

	updateList();

	window.addEventListener('scroll', () => {
    updateList();});
	
	init();
})