import React from 'react'
// import ReactAudioPlayer from 'react-audio-player';
import './static/Blog.css'

function Blog({selectedText}) {
    const defaultText = 'VidyaSagar vishv vandhya shramanam, bhaktya sada sanstuve, sarvoccham yaminam vinamya paramam, sarvarth siddipradam| gyaanadhyaan tapo bhirakt munipam, vishvasya vishvasayam| sakaram sharamanam vishaal hridayam, satyam shivam sundaram, vidya guru vandanam|'
    // const audioSource = "C:\Users\astha\Music\Playlists\Man Re Tu Kahe Na Dheer Dhare - Chitralekha 320 Kbps.mp3"
    return (

    <div className='blog-box'>

        {/* Title bar container */}
        <div className='text-title'>
            <h1>{selectedText}</h1>
        </div>

        {/* Audio Play */}
        <div className= 'audio'>
            <audio controls>
            <source src="https://pixabay.com/music/future-bass-vibe-on-173188/" type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>           
        </div>

        {/* Text Box */}
        <div className='text-box'>
            {defaultText}
        </div>

        {/* Youtube Banner */}
        <div className='video'>
            <iframe width='200' height='250' title='AcharyaShree' src="https://youtube.com/embed/T8gvzsRK40U">
            </iframe>
        </div>

    </div>
  )
}

export default Blog


{/* <ReactAudioPlayer
            src="D:\ReactJs\vidyasagar-ganga\src\components\man_re.mp3"
            // autoPlay
            controls/>  */}
