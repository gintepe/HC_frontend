var chart = new SmoothieChart({grid:{strokeStyle:'#f5f5f5', fillStyle:'#f5f5f5', borderVisible:false},minValue:80, maxValue:95, responsive:true, labels:{disabled:true} }),
    canvas = document.getElementById('graph'),
    series = new TimeSeries();

chart.addTimeSeries(series, {lineWidth:2,strokeStyle:'#fb3e28'});
chart.streamTo(canvas, 1000);


var timer = document.getElementById('timer');
var hr_data = [{"hr": 89.08664767719826}, {"hr": 90.83202108491999}, {"hr": 89.30409880338505}, {"hr": 84.8089321095036}, {"hr": 83.5362943388704}, {"hr": 84.22258420641674}, {"hr": 82.13026405321926}, {"hr": 80.55969785356235}, {"hr": 81.17266960253224}, {"hr": 80.06420487662696}, {"hr": 81.15361636364004}, {"hr": 82.35637451848699}, {"hr": 82.90742423228266}, {"hr": 85.08070511986195}, {"hr": 90.30423122353713}, {"hr": 92.40801373359082}, {"hr": 95.71562612021003}, {"hr": 96.9078924432574}, {"hr": 100.46066494481856}, {"hr": 100.92516247747119}, {"hr": 102.83907813465315}, {"hr": 102.73094202112986}, {"hr": 107.36691131366806}, {"hr": 106.85939258427548}, {"hr": 105.18861890336409}, {"hr": 100.3584253923542}, {"hr": 97.23081641202407}, {"hr": 91.52745542323083}, {"hr": 90.51554495806205}, {"hr": 90.90843605138555}, {"hr": 92.89413938581761}, {"hr": 96.0503010824432}, {"hr": 98.90590092142428}, {"hr": 96.14207681269187}, {"hr": 93.77551202003913}, {"hr": 91.75213517821354}, {"hr": 92.94054475934115}, {"hr": 93.16357877713999}, {"hr": 93.127648165337}, {"hr": 91.9051239525796}, {"hr": 91.15701537563831}, {"hr": 89.41765641749821}, {"hr": 88.44858887081685}, {"hr": 91.07391524527918}, {"hr": 92.07406482593507}, {"hr": 92.12508052921918}, {"hr": 91.74211015234187}, {"hr": 89.27571890803881}, {"hr": 86.68672294411039}, {"hr": 88.24815287158593}, {"hr": 92.65868181895516}, {"hr": 91.37742259036683}, {"hr": 94.13247917574392}, {"hr": 96.02345299022727}, {"hr": 99.09298131505214}, {"hr": 95.45352828869048}, {"hr": 95.35985648647573}, {"hr": 95.52150222194147}, {"hr": 92.8006059869339}, {"hr": 87.90091493813746}, {"hr": 87.7310937030448}, {"hr": 86.91541467656805}, {"hr": 86.35710667902832}, {"hr": 87.82338193098437}, {"hr": 87.96147239386214}, {"hr": 89.15651488228872}, {"hr": 93.09381690024018}, {"hr": 94.18106497286871}, {"hr": 94.17043705654055}, {"hr": 95.24850204760395}, {"hr": 96.23670303296183}, {"hr": 94.26606580078295}, {"hr": 92.61733644641953}, {"hr": 94.5443785078248}, {"hr": 97.12998051129915}, {"hr": 97.88292677426006}, {"hr": 97.89760758757328}, {"hr": 101.65035421068863}, {"hr": 100.26713242454413}, {"hr": 100.24344109659016}, {"hr": 100.56647908174487}, {"hr": 101.15477521026966}, {"hr": 96.13091814527553}, {"hr": 96.37191377141426}, {"hr": 94.89982282612625}, {"hr": 93.86037682627477}, {"hr": 93.50934034401266}, {"hr": 95.31025418841185}, {"hr": 92.51615885410966}, {"hr": 92.64819505631348}, {"hr": 89.8121808884005}, {"hr": 88.17777831249057}, {"hr": 89.2380949941122}, {"hr": 92.40583466006257}, {"hr": 90.74268228409218}, {"hr": 92.82135337468456}, {"hr": 93.88415191877125}, {"hr": 92.73825078154802}, {"hr": 92.61307266745287}, {"hr": 91.18362546553452}, {"hr": 90.85120922588544}, {"hr": 91.10217034721818}, {"hr": 89.71446429984186}, {"hr": 86.0727252108215}, {"hr": 91.60087452025557}, {"hr": 92.46930385917207}, {"hr": 90.81393396600622}, {"hr": 92.51020463604095}, {"hr": 96.92071813386804}, {"hr": 94.72375712658888}, {"hr": 95.22409035707017}, {"hr": 98.69468131226213}, {"hr": 100.74760698902307}, {"hr": 99.32937575147268}, {"hr": 100.13042192572337}, {"hr": 100.86402683656443}, {"hr": 100.82062239944565}, {"hr": 100.53586122640078}, {"hr": 101.36770114511457}, {"hr": 99.32283806439075}, {"hr": 99.49388299534577}, {"hr": 99.21610735691128}, {"hr": 96.88822784839891}, {"hr": 95.5767734404905}, {"hr": 98.64574433292367}, {"hr": 101.28362908346466}, {"hr": 106.20035924622772}, {"hr": 109.42167524430052}, {"hr": 111.36797404332489}, {"hr": 106.96279806318685}, {"hr": 104.27333780548672}, {"hr": 97.89126371134748}, {"hr": 96.09765128958458}, {"hr": 95.30627136747357}, {"hr": 97.85392869403024}, {"hr": 93.34538441285486}, {"hr": 92.02536288206801}, {"hr": 92.5744921017539}, {"hr": 89.6201311731431}, {"hr": 84.78162745598428}, {"hr": 87.39380712574845}, {"hr": 88.080587192049}, {"hr": 83.12059306686996}, {"hr": 84.40497285973592}, {"hr": 88.31553790638745}, {"hr": 88.93586926582087}, {"hr": 89.25380282746332}, {"hr": 92.5183478241947}, {"hr": 92.57413220860218}, {"hr": 94.44049671037766}, {"hr": 94.05135774647778}, {"hr": 94.1391175980223}, {"hr": 93.85268549402952}, {"hr": 94.56449089405405}, {"hr": 94.2678708821472}, {"hr": 93.17012949147752}, {"hr": 95.42059396931116}, {"hr": 95.31830122585654}, {"hr": 94.53989260313136}, {"hr": 90.63439349374379}, {"hr": 87.86896031811375}, {"hr": 82.59371543749106}, {"hr": 79.96026671564024}, {"hr": 77.43729275327175}, {"hr": 77.75365606974084}, {"hr": 78.81748068444004}, {"hr": 82.50616449165547}, {"hr": 83.0948391183588}, {"hr": 85.72518604885012}, {"hr": 88.48819341928171}, {"hr": 90.1521555586485}, {"hr": 89.11910145876591}, {"hr": 90.7153706047497}, {"hr": 91.30412131236582}, {"hr": 90.34230940530767}, {"hr": 93.65983367247695}, {"hr": 95.76557526903872}, {"hr": 97.35609830973861}, {"hr": 98.69513232270602}, {"hr": 97.42990667025727}, {"hr": 92.45059746797236}, {"hr": 90.9680019515669}, {"hr": 91.0335692724789}, {"hr": 91.14006739689576}, {"hr": 91.35071988081427}, {"hr": 92.49931807618736}];
var index = 0;
setInterval(function () {
    current_time = Number(timer.innerText);
    timer.innerText = current_time + 1;
    series.append(new Date().getTime(), hr_data[index]['hr']);
    index += 1;
    document.getElementById('hr').innerText = hr_data[index]['hr'];

}, 1000);
