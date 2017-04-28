function pickANumber() {
  var songType = ["1", "2", "3","4", "Group"];
  var songType = songType[Math.floor(Math.random() * songType.length)];
  document.getElementById("thisType").textContent = "Number of Swingers Will be " + songType;
};

function pickRandomSinger() {
  var nextSinger = ['Will', 'David', 'Amy', 'Charlene', 'Savannah', 'Clare', 'Jen', 'Zach'];
  var nextSinger = nextSinger[Math.floor(Math.random() * nextSinger.length)];
  document.getElementById('singit').textContent = "The next singer is " + nextSinger;
};


function pickRandomSong() {
  var nextSong = ['Aqua-Barbie Girl', 'Backstreet Boys-I Want It That Way', 'Backstreet Boys-As Long as You Love Me',
  'Backstreet Boys-Everybody', 'Blink-182-All The Small Things', 'Britney Spears - ...Baby One More Time', 'Destiny\'s Child-Say My Name',
  'Hanson-MMMBop', '*NSYNC-Bye Bye Bye', 'Savage Garden-Truly Madly Deeply', 'Tal Bachman-She\'s so High', 'Spice Girls-Wannabe',];
  var nextSong = nextSong[Math.floor(Math.random() * nextSong.length)];
  document.getElementById('nextSong').textContent = "The next song is " + nextSong;
};
