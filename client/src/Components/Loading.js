import loopGif from '../imgs/loading.gif';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img className="gif" data-mode="video" src={loopGif} alt="Looping Gif" />
            </div>
            <div class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl font-['PP Radio Grotesk']">Generating some awesome stuff</div>
        </div >
    );
};

export default Loading; 
