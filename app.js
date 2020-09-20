const background = document.getElementById('background')
const thumbnail = document.getElementById('thumbnail')
const song = document.getElementById('song')
const songArtist = document.getElementsByClassName('song-artist')[0]
const songTitle = document.getElementsByClassName('song-title')[0]
const progressBar = document.getElementById('progress-bar')
const pPause = document.getElementById('play-pause')
const nextBtn = document.getElementById('next-song')
const preBtn = document.getElementById('previous-song')

let artists = [
    'Binz',
    'Binz'
]

let titles = [
    'Big City Boi',
    'Gene'
]

let songs = [
    './assets/music/Big City Boi - Binz_ Touliver.mp3',
    './assets/music/Gene-BinzTouliver-5961947.mp3'
]

let covers = [
    './assets/img/big city boi 2.jpg',
    './assets/img/gene.jpg'
]

let playing = true

function playPause() {
    if (playing) {
        pPause.src='./assets/icons/icons8-pause-button-96.png'

        song.play()
    } else {
        pPause.src='./assets/icons/icons8-circled-play-96.png'

        song.pause()
    }
    playing = !playing

}

let songIndex = 0 

nextBtn.onclick = nextSong

function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    song.src = covers[songIndex]
    thumbnail.src = covers[songIndex]
    background.src = covers[songIndex]

    songArtist.innerHTML = artists[songIndex]
    songTitle.innerHTML = titles[songIndex]

    playing = true
    playPause()

}

preBtn.onclick = previousSong

function previousSong() {
   songIndex --
   if(songIndex < 0) {
       songIndex = songs.length - 1 
   }
   song.src = covers[songIndex]
    thumbnail.src = covers[songIndex]
    background.src = covers[songIndex]

    songArtist.innerHTML = artists[songIndex]
    songTitle.innerHTML = titles[songIndex]

    playing = true
    playPause()
}

function formatTime (seconds) {
    let minutes = Math.floor(seconds / 60)
    // let seconds = seconds % 60
     seconds = Math.floor(seconds - minutes * 60)
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
}

function updateProgressValue () {

    progressBar.max = song.duration 
    progressBar.value = song.currentTime

    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(song.currentTime))

    if (document.querySelector('.durationTime').innerHTML === 'NaN:NaN') {
        document.querySelector('.durationTime').innerHTML = '0:00'
    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration))
    }
}

// setInterval(() => {
//     updateProgressValue()
// }, 500)

setInterval(updateProgressValue, 500)

function changeProgressBar () {
    song.currentTime = progressBar.value
}

progressBar.onchange = changeProgressBar





