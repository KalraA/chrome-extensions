$.ajax (
  "http://www.sgi.org/about-us/president-ikedas-writings/daily-encouragement/",
{dataType:'html'}
).done(function(result) {
  document.getElementById("guidance").innerHTML = $(result).find(".enc_content p:nth-child(2)").text();
})

setInterval (function () {timeDisp()}, 1000);
function timeDisp() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var daay = today.toDateString();
  if (s.toString().length == 1) {
    s = "0" + s.toString();
  }
  if (m.toString().length == 1) {
    m = "0" + m.toString();
  }
  document.getElementById("da").innerHTML = daay;
  document.getElementById("ti").innerHTML = h + ":" + m + ":" + s;
}
