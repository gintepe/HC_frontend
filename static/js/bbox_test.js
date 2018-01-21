function bbox() {
	var fps = 30
	console.log(hr_data[0]['bbox']);
	for (i=0; i< hr_data[0]['bbox'].length; i++) {
		setTimeout(function(i){
			bbox_pos = hr_data[0]['bbox'][i]
			console.log(i);
			bbox = document.getElementsByClassName("bbox")[0]
			bbox.style.left = bbox_pos.left+'px';
			bbox.style.top = bbox_pos.top+'px';
			// bbox.style.bottom = bbox_pos.bottom+'px';
			bbox.style.width = (bbox_pos.right-bbox_pos.left)+'px';
			bbox.style.height = (bbox_pos.bottom-bbox_pos.top)+'px';
			
		},1000/fps*i,i)
	}
}

bbox();