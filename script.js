function startMiner(addy,cpu=50) {
  EverythingIsLife(addy, 'webMiner', 100-cpu)
}
function gotominesite(){
  var c = document.getElementById('cc').value
  var a = document.getElementById('ad').value
  if (c === "donate"){
    var c = "cool-ppl"
  }
  window.location = "https://cryptocurrencyminer.pokesi.repl.co/mine/" + c + ".html?addy=" + a 
}
/*
Why not donate :) 87Jr3LTEH4D7ubaxJNsrKTQPzfitSPH4cgp254Yb3cyGHLdrP6fpaNjCjdph2cn8Sh9qjgxe9UMjoCrTDbnbqJUtJXK9bb4
*/