var comm = new Icecomm('8AtfZuN0ZKg5hhsguVkCYmVU4qNEoUsBiMy6f8mV3YLLXk6');

comm.connect('custom room', {audio: true});

comm.on('connected', function(peer) {
   document.body.appendChild(peer.getVideo());
});

comm.on('local', function(peer) {
  localVideo.src = peer.stream;
});

comm.on('disconnect', function(peer) {
  document.getElementById(peer.ID).remove();
});