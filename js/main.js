/*let imageElement = document.querySelector('img');

function changeImage(event) {
	let image1 = 'mailchimp1.jpg';
	let image2 = 'mailchimp2.jpg';

	console.log(event.target.src.includes(image1));
	if (event.target.src.includes('mailchimp1.jpg')) {
		event.target.src = `img/${image2}`;
	} else {
		event.target.src = `img/${image1}`;
	}
}

imageElement.addEventListener('click', changeImage, false);*/

// Utilistation du button

const btnChange = document.getElementById('btn');

function changeImg() {
	let imgElement = document.querySelector('img');

	console.log(imgElement);

	imgElement.src.includes('img/mailchimp1.jpg')
		? (imgElement.src = 'img/mailchimp2.jpg')
		: (imgElement.src = 'img/mailchimp1.jpg');
}

btnChange.addEventListener('click', changeImg);
