var n = 0
$('div').on('click', function(e){
	setTimeout(function(){
		$(e.currentTarget).addClass('active')
	}, n*100)
	n+=1
})
