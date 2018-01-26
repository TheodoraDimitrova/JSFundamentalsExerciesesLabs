function nawPlaying(input) {
    let artistName=input[0];
   let trackName=input[1];
   let duration=input[2];
    return `Now Playing: ${trackName} - ${artistName} [${duration}]`;

}
console.log(nawPlaying(['Number One', 'Nelly', '4:09']));