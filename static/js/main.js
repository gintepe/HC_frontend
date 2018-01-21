// $(function () {
    var crow = $('.row-graph');
    function resize_graph() {
        $('.graph').attr('width', crow.width());
        $('.graph').attr('height', $('.col-name-person').height());

        // $('.row-stats').height($('.row-video').outerHeight(true) - $('.row-graph').outerHeight(true) - $('.row-person-info').outerHeight(true))
    }
    $(window).resize(resize_graph);
    resize_graph();

    var series_settings = {lineWidth:2,strokeStyle:'#fb3e28'};
    var chart_settings = {grid:{strokeStyle:'#f5f5f5', fillStyle:'#f5f5f5', borderVisible:false}, labels:{disabled:true} };

    var chart = new SmoothieChart(chart_settings),
        canvas = document.getElementsByClassName('graph')[0];
        series = new TimeSeries();

    chart.addTimeSeries(series, series_settings);
    chart.streamTo(canvas, 1000);

    setInterval(function () {
       series.append(new Date().getTime(), Math.random())
    },1000);

// });

