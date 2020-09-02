
input.addEventListener('keydown', function(e) {
    var info = '';
    info = info + e.key;
    if (e.key === 'enter') {
      console.log(info);
    }
});
