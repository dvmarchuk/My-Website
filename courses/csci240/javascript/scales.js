/**
 * Created by DennisMarchuk on 3/19/2018.
 */

    //circle radius = score
    //x = time of the day
    //y = length of post



function convert (input) {
    var time = new Date(input * 1000);
    return time.toLocaleTimeString([], {hour: '2-digit', hour12:false});

}


console.log(convert(1515297384));



var comments = [
    {"score":"1","retrieved_on":"1515346498","f0_":"1642"},
    {"score":"1","retrieved_on":"1515340384","f0_":"149"},
    {"score":"1","retrieved_on":"1515373467","f0_":"1178"},
    {"score":"1","retrieved_on":"1515335151","f0_":"1945"},
    {"score":"1","retrieved_on":"1515328056","f0_":"720"},
    {"score":"1","retrieved_on":"1515373473","f0_":"1188"},
    {"score":"1","retrieved_on":"1515372294","f0_":"196"},
    {"score":"1","retrieved_on":"1515337458","f0_":"1133"},
    {"score":"1","retrieved_on":"1515337334","f0_":"232"},
    {"score":"1","retrieved_on":"1515373390","f0_":"102"},
    {"score":"1","retrieved_on":"1515389420","f0_":"163"},
    {"score":"1","retrieved_on":"1515362252","f0_":"635"},
    {"score":"1","retrieved_on":"1515389877","f0_":"344"},
    {"score":"1","retrieved_on":"1515387489","f0_":"4529"},
    {"score":"2","retrieved_on":"1515393425","f0_":"972"},
    {"score":"7","retrieved_on":"1512333597","f0_":"1919"},
    {"score":"1","retrieved_on":"1515307842","f0_":"2087"},
    {"score":"438","retrieved_on":"1515293886","f0_":"1836"},
    {"score":"2","retrieved_on":"1512332041","f0_":"163"},
    {"score":"1","retrieved_on":"1512336016","f0_":"557"},
    {"score":"2","retrieved_on":"1512331224","f0_":"290"},
    {"score":"0","retrieved_on":"1515290382","f0_":"19"},
    {"score":"11","retrieved_on":"1515283808","f0_":"63"},
    {"score":"4","retrieved_on":"1515351486","f0_":"63"},
    {"score":"36","retrieved_on":"1515366444","f0_":"1494"},
    {"score":"1","retrieved_on":"1515291086","f0_":"1431"},
    {"score":"81","retrieved_on":"1515284808","f0_":"1127"},
    {"score":"0","retrieved_on":"1515329146","f0_":"372"},
    {"score":"19","retrieved_on":"1515316131","f0_":"1405"},
    {"score":"5","retrieved_on":"1515308411","f0_":"623"},
    {"score":"7","retrieved_on":"1515291981","f0_":"333"},
    {"score":"42","retrieved_on":"1515320587","f0_":"2285"},
    {"score":"5","retrieved_on":"1515292278","f0_":"181"},
    {"score":"14","retrieved_on":"1515325547","f0_":"819"},
    {"score":"0","retrieved_on":"1515351305","f0_":"351"},
    {"score":"140","retrieved_on":"1515354694","f0_":"464"},
    {"score":"56","retrieved_on":"1515355393","f0_":"4038"},
    {"score":"82","retrieved_on":"1515320318","f0_":"1534"},
    {"score":"142","retrieved_on":"1515357719","f0_":"6"},
    {"score":"231","retrieved_on":"1515371541","f0_":"1013"},
    {"score":"0","retrieved_on":"1515348360","f0_":"1476"},
    {"score":"1","retrieved_on":"1515346455","f0_":"437"},
    {"score":"80","retrieved_on":"1515387400","f0_":"2592"},
    {"score":"3","retrieved_on":"1515378382","f0_":"530"},
    {"score":"17","retrieved_on":"1515397995","f0_":"43"},
    {"score":"213","retrieved_on":"1515398223","f0_":"1785"},
    {"score":"0","retrieved_on":"1515399540","f0_":"142"},
    {"score":"777","retrieved_on":"1515368677","f0_":"129"},
    {"score":"4","retrieved_on":"1515386987","f0_":"104"},
    {"score":"5","retrieved_on":"1512336971","f0_":"438"},
    {"score":"0","retrieved_on":"1512340886","f0_":"904"},
    {"score":"0","retrieved_on":"1512339749","f0_":"690"},
    {"score":"5","retrieved_on":"1515347960","f0_":"529"},
    {"score":"4","retrieved_on":"1515286021","f0_":"70"},
    {"score":"3","retrieved_on":"1515339704","f0_":"16"},
    {"score":"3","retrieved_on":"1515385697","f0_":"17"},
    {"score":"6","retrieved_on":"1515309258","f0_":"235"},
    {"score":"15","retrieved_on":"1515314109","f0_":"203"},
    {"score":"3","retrieved_on":"1515361938","f0_":"75"},
    {"score":"1","retrieved_on":"1515331399","f0_":"276"},
    {"score":"2","retrieved_on":"1515361026","f0_":"392"},
    {"score":"6","retrieved_on":"1512334572","f0_":"265"},
    {"score":"9","retrieved_on":"1515373758","f0_":"545"},
    {"score":"10","retrieved_on":"1512332155","f0_":"448"},
    {"score":"19","retrieved_on":"1512335577","f0_":"1864"},
    {"score":"9","retrieved_on":"1515286155","f0_":"394"},
    {"score":"7","retrieved_on":"1515368205","f0_":"140"},
    {"score":"95","retrieved_on":"1515316538","f0_":"2874"},
    {"score":"27","retrieved_on":"1515343310","f0_":"3203"},
    {"score":"7","retrieved_on":"1515371950","f0_":"782"},
    {"score":"0","retrieved_on":"1515339992","f0_":"782"},
    {"score":"0","retrieved_on":"1515362093","f0_":"597"},
    {"score":"2","retrieved_on":"1515365269","f0_":"1328"},
    {"score":"4","retrieved_on":"1515392024","f0_":"477"},
    {"score":"27","retrieved_on":"1515398797","f0_":"1252"},
    {"score":"56","retrieved_on":"1515396049","f0_":"172"},
    {"score":"185","retrieved_on":"1515397719","f0_":"1976"},
    {"score":"2","retrieved_on":"1515319141","f0_":"1758"},
    {"score":"1","retrieved_on":"1515333078","f0_":"496"},
    {"score":"4","retrieved_on":"1512337161","f0_":"142"},
    {"score":"10","retrieved_on":"1515318201","f0_":"949"},
    {"score":"22","retrieved_on":"1515292671","f0_":"3130"},
    {"score":"4","retrieved_on":"1515294684","f0_":"2080"},
    {"score":"2","retrieved_on":"1515372987","f0_":"2047"},
    {"score":"5","retrieved_on":"1515293199","f0_":"419"},
    {"score":"8","retrieved_on":"1515286569","f0_":"30650"},
    {"score":"7","retrieved_on":"1515379375","f0_":"540"},
    {"score":"7","retrieved_on":"1515359381","f0_":"747"},
    {"score":"6","retrieved_on":"1515387442","f0_":"370"},
    {"score":"1","retrieved_on":"1512334138","f0_":"393"},
    {"score":"2","retrieved_on":"1512337910","f0_":"700"},
    {"score":"20","retrieved_on":"1515379015","f0_":"288"},
    {"score":"5","retrieved_on":"1515368944","f0_":"996"},
    {"score":"5","retrieved_on":"1515381661","f0_":"717"},
    {"score":"23","retrieved_on":"1515388616","f0_":"486"},
    {"score":"5","retrieved_on":"1515393111","f0_":"1104"},
    {"score":"1","retrieved_on":"1515357682","f0_":"51"},
    {"score":"1","retrieved_on":"1515349348","f0_":"71"},
    {"score":"6","retrieved_on":"1515287143","f0_":"349"},
    {"score":"5","retrieved_on":"1515373673","f0_":"89"},
    {"score":"4","retrieved_on":"1515379589","f0_":"398"},
    {"score":"5","retrieved_on":"1515351700","f0_":"769"},
    {"score":"2","retrieved_on":"1515366722","f0_":"1076"},
    {"score":"2","retrieved_on":"1515312216","f0_":"1040"},
    {"score":"1","retrieved_on":"1515353064","f0_":"913"},
    {"score":"1","retrieved_on":"1515345102","f0_":"133"},
    {"score":"13","retrieved_on":"1515322984","f0_":"14"},
    {"score":"1","retrieved_on":"1515303222","f0_":"81"},
    {"score":"1","retrieved_on":"1515301641","f0_":"592"},
    {"score":"1","retrieved_on":"1515349607","f0_":"117"},
    {"score":"2","retrieved_on":"1515362367","f0_":"111"},
    {"score":"2","retrieved_on":"1515389029","f0_":"42"},
    {"score":"2","retrieved_on":"1515306690","f0_":"315"},
    {"score":"1","retrieved_on":"1515299053","f0_":"190"},
    {"score":"102","retrieved_on":"1515306612","f0_":"97"},
    {"score":"2","retrieved_on":"1515285889","f0_":"655"},
    {"score":"8","retrieved_on":"1515349424","f0_":"63"},
    {"score":"4","retrieved_on":"1515310425","f0_":"244"},
    {"score":"22","retrieved_on":"1515287117","f0_":"629"},
    {"score":"6","retrieved_on":"1515301363","f0_":"168"},
    {"score":"229","retrieved_on":"1515301884","f0_":"148"},
    {"score":"1","retrieved_on":"1515309925","f0_":"43"},
    {"score":"2","retrieved_on":"1515309518","f0_":"408"},
    {"score":"4","retrieved_on":"1515362961","f0_":"50"},
    {"score":"1","retrieved_on":"1515307968","f0_":"281"},
    {"score":"3","retrieved_on":"1515312181","f0_":"97"},
    {"score":"2","retrieved_on":"1515305655","f0_":"253"},
    {"score":"4","retrieved_on":"1515365789","f0_":"262"},
    {"score":"2","retrieved_on":"1515334135","f0_":"259"},
    {"score":"1","retrieved_on":"1515336181","f0_":"317"},
    {"score":"3","retrieved_on":"1515309229","f0_":"113"},
    {"score":"7","retrieved_on":"1515308550","f0_":"88"},
    {"score":"13","retrieved_on":"1515310025","f0_":"813"},
    {"score":"3","retrieved_on":"1515309719","f0_":"423"},
    {"score":"4","retrieved_on":"1515328932","f0_":"119"},
    {"score":"2","retrieved_on":"1515328545","f0_":"21"},
    {"score":"0","retrieved_on":"1515311125","f0_":"83"},
    {"score":"6","retrieved_on":"1515352225","f0_":"148"},
    {"score":"7","retrieved_on":"1515347519","f0_":"202"},
    {"score":"2","retrieved_on":"1515350397","f0_":"973"},
    {"score":"27","retrieved_on":"1515348958","f0_":"7"},
    {"score":"2","retrieved_on":"1515398430","f0_":"94"},
    {"score":"8","retrieved_on":"1515349436","f0_":"189"},
    {"score":"8","retrieved_on":"1515349475","f0_":"29"},
    {"score":"3","retrieved_on":"1515362642","f0_":"410"},
    {"score":"8","retrieved_on":"1515372695","f0_":"149"},
    {"score":"2","retrieved_on":"1515399755","f0_":"114"},
    {"score":"0","retrieved_on":"1515368704","f0_":"72"},
    {"score":"6","retrieved_on":"1515381613","f0_":"69"},
    {"score":"3","retrieved_on":"1515351629","f0_":"63"},
    {"score":"2","retrieved_on":"1515345941","f0_":"140"},
    {"score":"2","retrieved_on":"1515389875","f0_":"35"},
    {"score":"3","retrieved_on":"1515359764","f0_":"301"},
    {"score":"3","retrieved_on":"1515366170","f0_":"584"},
    {"score":"1","retrieved_on":"1515398392","f0_":"142"},
    {"score":"4","retrieved_on":"1515385055","f0_":"50"},
    {"score":"0","retrieved_on":"1515383779","f0_":"377"},
    {"score":"3","retrieved_on":"1515387426","f0_":"153"},
    {"score":"23","retrieved_on":"1515358545","f0_":"454"},
    {"score":"21","retrieved_on":"1515328569","f0_":"3709"},
    {"score":"126","retrieved_on":"1515393869","f0_":"148"},
    {"score":"3","retrieved_on":"1512331432","f0_":"48"},
    {"score":"13","retrieved_on":"1515291018","f0_":"16"},
    {"score":"1","retrieved_on":"1515320948","f0_":"1419"},
    {"score":"1","retrieved_on":"1515286334","f0_":"126"},
    {"score":"4","retrieved_on":"1515362987","f0_":"183"},
    {"score":"0","retrieved_on":"1515297122","f0_":"87"},
    {"score":"0","retrieved_on":"1515292768","f0_":"96"},
    {"score":"37","retrieved_on":"1515306951","f0_":"118"},
    {"score":"2","retrieved_on":"1515318463","f0_":"1226"},
    {"score":"54","retrieved_on":"1512340656","f0_":"118"},
    {"score":"1","retrieved_on":"1515309069","f0_":"13"},
    {"score":"269","retrieved_on":"1515329957","f0_":"778"},
    {"score":"1","retrieved_on":"1515311162","f0_":"4"},
    {"score":"1","retrieved_on":"1515312866","f0_":"35"},
    {"score":"0","retrieved_on":"1515305917","f0_":"52"},
    {"score":"14","retrieved_on":"1515353046","f0_":"34"},
    {"score":"0","retrieved_on":"1515334799","f0_":"64"},
    {"score":"0","retrieved_on":"1515361696","f0_":"49"},
    {"score":"1","retrieved_on":"1515366671","f0_":"100"},
    {"score":"0","retrieved_on":"1515347704","f0_":"48"},
    {"score":"16","retrieved_on":"1515376743","f0_":"117"},
    {"score":"2","retrieved_on":"1515366115","f0_":"44"},
    {"score":"0","retrieved_on":"1515342451","f0_":"217"}
];



// var json = JSON.parse(comments);

// var rScale = d3.scaleLinear()
//     .domain([0,25])
//     .range([0,3000]);

//
// var u = d3.select("#circlegraph")
//     .selectAll("circle")
//     .data(comments);
//
//     u.enter()
//     .append("circle")
//     .merge(u)
//     .attr("cx", (d,i) => rScale(d.retrieved_on))
//     .attr("cy", (d,i) => rScale(d.f0_))
//     .attr("r", (d,i) => rScale(d.score/2))
//     .attr("fill", "pink");
var svg;

var rscale = d3.scaleLinear()
    .domain([0,24])
    .range([50,990]);

var yscale = d3.scaleLinear()
    .domain([0,3000])
    .range([20,690]);

var sscale = d3.scaleLinear()
    .domain([0,800])
    .range([1,40]);

let color = d3.scaleLinear()
    .domain([0,25])
    .range(["yellow", "red"]);


var xScale = d3.scaleLinear()
    .domain([0, 24])
    .range([29, 990]);

var xAxis = d3.axisBottom(xScale);

var yAxis = d3.axisLeft(yscale)
    .tickSize([0]);



svg = d3.select("body")
    .append("svg")
    .attr("width", 1024)
    .attr("height", 768);



svg.selectAll("circle")
    .data(comments)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return rscale(convert(d.retrieved_on));
    })
    .attr("cy", function(d) {
        return yscale(d.f0_);
    })
    .attr("r", function(d) {
        return sscale(d.score);
    });


svg.append("g")
    .attr("transform", "translate(0,740)")
    .style("text-anchor", "middle")
    .attr("fill", "black")
    .call(xAxis);

svg.append("text")
    .attr("transform", "translate(80,730)")
    .style("text-anchor", "middle")
    .attr("fill", "black")
    .text("Time Submitted");



svg.append("g")
    .attr("transform", "translate(23,0)")
    .style("text-anchor", "middle")
    .attr("fill", "black")
    .call(yAxis);

svg.append("text")
    .attr("transform", "translate(80,13)")
    .style("text-anchor", "middle")
    .attr("fill", "black")
    .text("Points Recieved");




