var myCursor = document.querySelector('.video-cont .cursor');
var myVideo = document.querySelector('.video-cont video')
var playEvent = true

myVideo.addEventListener('loadeddata', function() {
    myVideo.play()
})
myVideo.addEventListener('click', function() {
    playEvent = !playEvent
    if (playEvent) {
        myVideo.play()
        document.querySelectorAll('.video-cont .pauseIcon').forEach(function(item) {
            item.style.display = 'flex';
        })
        document.querySelectorAll('.video-cont .iconPlay').forEach(function(item) {
            item.style.display = 'none';
        })
    } else {
        myVideo.pause()
        document.querySelectorAll('.video-cont .pauseIcon').forEach(function(item) {
            item.style.display = 'none';
        })
        document.querySelectorAll('.video-cont .iconPlay').forEach(function(item) {
            item.style.display = 'flex';
        })
    }
})

function moseMove(e) {
    myCursor.style.transform = `translate(${e.offsetX - 45}px, ${e.offsetY - 45}px)`;
    myCursor.style.opacity = '1';
}