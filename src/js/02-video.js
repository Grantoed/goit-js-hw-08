import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  console.log(data.seconds);
  localStorage.setItem('playtime', data.seconds);
}

player.setCurrentTime(localStorage.getItem('playtime'));
