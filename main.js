function pickANumber() {
  var songType = ["1", "2", "3","4", "Group"];
  var numberopeeops = songType[Math.floor(Math.random() * songType.length)];
  document.getElementById("thisType").textContent = "Number of singers will be: " + numberopeeops;
};

function pickRandomSinger() {
  var nextSinger = ['Will', 'David', 'Amy','Charlene', 'Savannah', 'Clare', 'Jen', 'Zack'];
  var singer = nextSinger[Math.floor(Math.random() * nextSinger.length)];
  document.getElementById('singit').textContent = "The next singer is " + singer;
};


function pickRandomSong() {
  var nextSong = [
  'ABBA - Dancing Queen',
  'Aladin - A Whole New World',
  'Aqua - Barbie Girl',
  'Backstreet Boys - I Want It That Way',
  'Backstreet Boys - As Long as You Love Me',
  'Backstreet Boys - Everybody',
  'Blink-182 - All The Small Things',
  'Blink-182 - What\'s My Age Again?',
  'Bon Jovi - Livin\' On A Prayer',
  'Bon Jovi - It\'s My Life',
  'Britney Spears - ...Baby One More Time',
  'Carly Rae Jepsen - Call Me Maybe',
  'Demi Lovato - Really Don\'t Care',
  'Destiny\'s Child - Say My Name',
  'Hanson - MMMBop',
  'Katy Perry - Firework',
  'Lion King - Circle of Life',
  'Mulan - I\'ll Make a Man Out of You',
  '*NSYNC - Bye Bye Bye',
  '*NSYNC - I Want You Back',
  '*NSYNC - Tearin\' Up My Heart',
  'Oasis - Wonderwall',
  'Savage Garden - Truly Madly Deeply',
  'Smash Mouth - Somebody',
  'Tal Bachman - She\'s so High',
  'Tarzan - Son of Man',
  'Tarzan - You\'ll Be In My Heart',
  'Spice Girls - Spice Up Your Life',
  'Spice Girls - Wannabe'];
  var music = nextSong[Math.floor(Math.random() * nextSong.length)];
  document.getElementById('nextSong').textContent = "The next song is " + music;
  nextSong.splice(nextSong,1);
  return false;
};


function pickRandomDancer() {
var randomDancer = ['David'];
document.getElementById('danceMonkey').textContent = randomDancer + " will dance";
}
