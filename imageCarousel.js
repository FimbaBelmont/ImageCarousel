imgArr = ["./img.jpeg", "./img2.jpg", "./img3.png", "./img4.png"];

function imgCarousel(Arr) {
	currentImgValue = -1;
	let container = document.querySelector(".imageCarousel");
	let imgArr = [];
	Arr.forEach((element) => {
		let img = document.createElement("img");
		img.setAttribute("src", element);
		container.appendChild(img);
		img.classList.add("slideImg");
		imgArr.push(img);
	});

	next();
	setInterval(next, 5000);
	function next() {
        if (currentImgValue === imgArr.length - 1) {
			currentImgValue = 0;
		} else {
			currentImgValue++;
		}
		imgArr.at(currentImgValue-1).setAttribute("style", "display:none");
		imgArr.at(currentImgValue).setAttribute("style", "display:inline");

	}

	function back() {
        if (currentImgValue === 0) {
			currentImgValue = imgArr.length - 1;
		} else {
			currentImgValue--;
		}
		imgArr.at(currentImgValue+1).setAttribute("style", "display:none");
		imgArr.at(currentImgValue).setAttribute("style", "display:inline");

        		if (currentImgValue === 0) {
			currentImgValue = imgArr.length - 1;
		} else {
			currentImgValue--;
		}
	}

	const nextBtt = document.createElement("img");
	nextBtt.setAttribute("src", "./nextBtt.svg");
	nextBtt.classList.add("rightBtt");
	container.appendChild(nextBtt);
	nextBtt.addEventListener("click", next);

	const backBtt = document.createElement("img");
	backBtt.setAttribute("src", "./backBtt.svg");
	backBtt.classList.add("leftBtt");
	container.appendChild(backBtt);
	backBtt.addEventListener("click", back);

    let navBtts = document.createElement("div");
    navBtts.classList.add("navBtts");
    container.appendChild(navBtts);
    imgArr.forEach((element, index)=> {
        let navBtt = document.createElement("img");
        navBtt.classList.add("navBtt");
        navBtts.appendChild(navBtt);
        navBtt.addEventListener("click", ()=> {
            imgArr.at(currentImgValue).setAttribute("style", "display:none");
            element.setAttribute("style", "display:inline");
            currentImgValue = index;
        })
    });
}

imgCarousel(imgArr);
