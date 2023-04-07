interface Song {
    id: string;
    name: string;
    duration: string;
    artistByArtistId: {
        name: string;
    };
}

export default Song;
