import ReactPlayer from 'react-player'

const YoutubeVideo = ({ url }) => {
    return (
        <div className="container">
            <ReactPlayer url={url} pip={true} />
        </div>
    );
}

export default YoutubeVideo;