function postmessage() {
  var songType = ["Solo", "Duet", "3","4", "Group"];
  var songType = songType[Math.floor(Math.random() * songType.length)];
  document.getElementById("thisType").textContent = "You will be singing " + songType;
};

function postmessage() {
  var nextSinger = ['Will', 'David', 'Amy', 'Charlene', 'Savannah', 'Clare'];
  var nextSinger = nextSinger[Math.floor(Math.random() * nextSinger.length)];
  document.getElementById('singit').textContent = "The next singer is " + nextSinger;
};
