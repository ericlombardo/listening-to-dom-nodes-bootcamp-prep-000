// messing around with adding event listeners and displaying variables after
input.addEventListener('keydown', function(e) {
    var info = '';
    info = info + e.key;
    if (e.key === 'enter') {
      console.log(info);
    }
});
