$(document).ready(function() {
    var audio = $("#myAudio")[0]; 

    $("#playButton").click(function() {
        audio.play();
    });

    $("#pauseButton").click(function() {
        audio.pause();
    });
});

  const sounds = {
    a: new Audio('SnareBR_2-017.wav'),
    s: new Audio('Tom_1-000.wav'),
    d: new Audio('Perc_1-002.wav'),
    f: new Audio('Kick_1-002.wav'),
    g: new Audio('Snare_1-026.wav'),
    k: new Audio('Hat_2-045.wav'),
    ฟ: new Audio('SnareBR_2-017.wav'),
    ห: new Audio('Tom_1-000.wav'),
    ก: new Audio('Perc_1-002.wav'),
    ด: new Audio('Kick_1-002.wav'),
    เ: new Audio('Snare_1-026.wav'),
    า: new Audio('Hat_2-045.wav')
  };

  function playSound(key) {
    if (sounds[key]) {
      sounds[key].currentTime = 0;
      sounds[key].play();
    }
  }

  document.querySelectorAll('.drum button').forEach((button) => {
    const key = button.getAttribute('data-key');
    button.addEventListener('click', () => playSound(key));
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (sounds[key]) {
      playSound(key);
    }
  });

  
  $(document).keydown(function(event) {
    const key = event.key.toLowerCase();
    if (['a', 's', 'd', 'j', 'k','l'].includes(key)) {
      $(`.drum button[data-key="${key}"]`).css('background-color', '#38d083');
    }
  });
  
$(document).keyup(function (event) {
  const key = event.key.toLowerCase();
  if (['a', 's', 'd', 'j', 'k','l'].includes(key)) {
    $(`.drum button[data-key="${key}"]`).css('background-color', 'rgba(22, 22, 22, 0.7)');
  }
});
  
  $('.drum button').hover(
    function() {
      $(this).css('background-color', '#38d083');
    },
    function() {
      $(this).css('background-color', 'rgba(22, 22, 22, 0.7)');
    }
  );