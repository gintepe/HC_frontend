    var crow = $('.row-graph');
    function resize_graph() {
        $('.graph').attr('width', crow.width());
        $('.graph').attr('height', $('.col-name-person').height());
        }
    $(window).resize(resize_graph);
    resize_graph();

    var series_settings = {lineWidth:2,strokeStyle:'#fb3e28'};
    var chart_settings = {grid:{strokeStyle:'#f5f5f5', fillStyle:'#f5f5f5', borderVisible:false}, labels:{disabled:true} };


    $.each(hr_data, function (i, person) {
        var j = (i + 1).toString();
        var index = 0;
        var min = document.getElementById('min');
        var max = document.getElementById('max');
        max.innerText = Math.round(person['hr'][index]);
        min.innerText = Math.round(person['hr'][index]);
        var chart = new SmoothieChart(chart_settings),
        canvas = document.getElementsByClassName('g' + j)[0],
        series = new TimeSeries();
        chart.addTimeSeries(series, series_settings);
        chart.streamTo(canvas, 1000);

        setInterval(function () {
            series.append(new Date().getTime(), person['hr'][index]);
            $('.p' + j + ' .hr-live').text(Math.round(person['hr'][index]));
            if ( person['hr'][index] < min.innerText ) {
                min.innerText = Math.round(person['hr'][index]);
            } else if ( person['hr'][index] > max.innerText ) {
                max.innerText = Math.round(person['hr'][index]);
            }
            index += 1;
        }, 1000)
    });





