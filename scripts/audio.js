var wavesurfer = WaveSurfer.create({
    // Use the id or class-name of the element you created, as a selector
    container: '#waveform1',
  // The color can be either a simple CSS color or a Canvas gradient
    waveColor: 'grey',
    progressColor: 'hsla(200, 100%, 30%, 0.5)',
  cursorColor: '#fff',
    // This parameter makes the waveform look like SoundCloud's player
    // barWidth: 3,
    // hideScrollbar: false
});

wavesurfer.load(src="audio/protestsound.mp3");
// wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

wavesurfer.on('load', wavesurfer.play.bind(wavesurfer))