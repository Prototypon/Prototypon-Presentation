$(document).ready(function () {
	$('[iframe]').each(function(i, e){
		var iframe = $(this).find('iframe')
		var url = iframe.attr('src')
		var proto = 'proto_' + i

		iframe.attr('name', proto)

		$(this).find('.reload').on('click', function(){
			iframe.attr('src', url)
			return false
		})

		var preview_url = url.replace('index.html', 'preview.html')
		$(this).find('.new-window').attr('href', preview_url)
	})
})