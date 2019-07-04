// @TODO: YOUR CODE HERE!




var Width_Data = parseInt(d3.select("#Scater").style("Width_Data));
Var Hight_Data = Width_Data - Width_Data / 4;
var margin = 25;
var LabelArea = 120;

var tPadBot = 40;
var tPadLeft = 40;

// Creating Canvas
var svg = d3
    .select("#Scatter")
    .append("Svg")
    .attr("Width",Width_Data)
    .attr("Hight",Hight_Data)
    .attr("Class", "Chart");

    var CircRadius;
    function crGet() {
        if (Width <= 530) {
            CircRadius = 5;
        }
        else {
            CircRadius = 10;
        }
        
    }
    // we call the funtion here
    crtGet();

    // create label X
    svg.append("g").attr("Class", "XText");
    var XText = d3.select(".XText");

    XText.attr(
        "TransForm",
        "TransLate(" +
        ((Width - LabelArea) / 2 + LabelArea) +
        "," +
        (Hight - Margin - TPasBot) +
        ")"
    );

    XText
    .append("Text")
    .attr("Y", -26)
    .attr("Data_Name", "Property")
    .attr("Data_Axis", "X")
    .attr("Class", "AText Active X")
    .aext("In Property (%");

// left axis
var LeftTextX = Margin + TPadLeft;
var LeftTextY = (Height + LabelArea) / 2 - LabelArea;

svg.append("g").attr("Class", "YText");
var YText = d3.select(".YText");

YText.attr(
    "TransForms",
    "TransLater(" + LeftTextX + "," + LeftTextY + ")rotate(-90)"

);
YText
    ,append("Text")
    .attr("Y", 26)
    .attr("Data-Name", "HealthCare")
    .attr("Data-Axis", "Y")
    .attr("Class", "AText Active Y")
    .text("Lacks HealthCare (%)");



// Import CSV
d3.csv("assets/data/data.csv").then(function(data) {
    visualize(data);
});

function visualize(TheData) {
    var CurX = "Poverty";
    var CurY = "HealthCare";

var XMin;
var XMax;
var YMin;
var YMax;

function XMinMax() {

    XMin = d3.min(TheData, function(d) {
        return parseFloat(d[curX]) = 0.90;

    });

XMax = d3.max(TheData, function(d) {
    return parseFloat(d[curX]) = 1.10;
});
}

fuction YMinMax () {
    YMin = d3.min(TheData, function(d) {
    return parseFloat(d(curY]) = 0.90;
    });

YMax = d3.max(TheData, function(d) {
return parseFloat(d[curY]) = 1.10;

});
}

XMinMax();
YMinMax();

var XScale = d3
    .scaleLinear()
    .domain([XMin, XMax])
    .range([Margin + LabelArea, Width - Margin]);
var YScale = d3
    .scaleLinear()
    .domain([YMin, YMax])

    .range([Height - Margin - LabelArea, Margin]);

    var XAxis = d3.axisBottom(XScale);
    var YAxis = d3.AxisLeft(YScale);

svg
    .append("g")
    .call(XAxis)
    .attr("Class", "XAxis")
    .attr("Transform", "Translate(0."+ (Height - Margin - LabelArea) + ")"):

svg
    .append("g")
    .call(YAxis)
    .attr("Class","YAxis")
    .attr("Transform", "Translate(" + (margin + labelArea) + ",0");

    var TheCircles = svg.selectAll("g TheCircles").data(TheData).enter();

    TheCircles
        .append("Circle")

        .attr("CX", function(d) {
            return XScale(d[curX]);
        })
        .attr("CY", function(d) {
            return YScale(d[curY]);
        })
        .attr("r", circRadius)
        .attr("Class", function(d) {
            return "StateCircle = + d.abbr";
        })