exports.index = function(req,res) {
	let content = {
		highlight: {
			url:'/assets/images/home/banner/highlight.jpg',
			title: 'I am Fai'
		},
		thumbnail: [
		{
			url:'/assets/images/home/banner/thumbnail-1.jpg',
			title: 'Anusara'
		},
		{
			url:'/assets/images/home/banner/thumbnail-2.jpg',
			title: 'Juntui'
		},
		{
			url:'/assets/images/home/banner/thumbnail-3.jpg',
			title: 'eiei'
		},
		{
			url:'/assets/images/home/banner/thumbnail-4.jpg',
			title: 'tubtui'
		}

	  ]
	}
	res.render('home.twig', content)
}