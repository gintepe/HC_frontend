function bbox() {
	var fps = 30
	console.log(hr_data[0]['bbox']);
	for (i=0; i< hr_data[0]['bbox'].length; i++) {
		setTimeout(function(i){
			bbox_pos = hr_data[0]['bbox'][i]
			console.log(bbox_pos);
			bbox = document.getElementsByClassName("bbox")[0]
			bbox.style.left = bbox_pos.left*100+'%';
			bbox.style.top = bbox_pos.top*100+'%';
			// bbox.style.bottom = bbox_pos.bottom+'px';
			bbox.style.width = (bbox_pos.right-bbox_pos.left)*100+'%';
			bbox.style.height =(bbox_pos.bottom-bbox_pos.top)*100+'%';
			
		},1000/fps*i,i)
	}
}

bbox();