function bbox() {
	var fps = 30

	if (hr_data.length == 1) {
        for (i = 0; i < hr_data[0]['bbox'].length; i++) {
            setTimeout(function (i) {
                for (j=0;j<3;j++) {
                    s = 1.3;
                    var h = $('.video').height() * s;
                    var w = $('.video').width() * s;
                    console.log(h, w)
                    bbox_pos = hr_data[0]['bbox'][i];
                    bbox = document.getElementsByClassName("bbox")[j]
                    bbox.style.left = bbox_pos.left * w + 'px';
                    bbox.style.top = bbox_pos.top * h + 'px';
                    // bbox.style.bottom = bbox_pos.bottom+'px';
                    bbox.style.width = (bbox_pos.right - bbox_pos.left) * w + 'px';
                    bbox.style.height = (bbox_pos.bottom - bbox_pos.top) * h + 'px';
                }
            }, 1000 / fps * i, i)

        }
    }
	if (hr_data.length == 3) {

        for (i = 0; i < hr_data[0]['bbox'].length; i++) {
            setTimeout(function (i) {
            	for (j=0; j<3;j++) {
                    s = 1.3;
                    var h = $('.video').height() * s;
                    var w = $('.video').width() * s;
                    console.log(h, w)
                    bbox_pos = hr_data[j]['bbox'][i];
                    bbox = document.getElementsByClassName("bbox")[j]
                    bbox.style.left = bbox_pos.left * w + 'px';
                    bbox.style.top = bbox_pos.top * h + 'px';
                    // bbox.style.bottom = bbox_pos.bottom+'px';
                    bbox.style.width = (bbox_pos.right - bbox_pos.left) * w + 'px';
                    bbox.style.height = (bbox_pos.bottom - bbox_pos.top) * h + 'px';
                }
            }, 1000 / fps * i, i)

        }
    }
}

bbox();