var n = 0
$('div').on('click', function(e){
	setTimeOut(function(){
		$(e.currentTarget).addClass('active')
	}, n*100)
	n+=1
})
