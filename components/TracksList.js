import React from "react";

const Tracks = ({
    TrackTitle = "TrackTitle",
    title,
    ArtistName = "ArtistName",
    artist,
    className = "",
    IsLiked = "IsLiked",
    liked,
    ListeningCounter = "ListeningCounter",
    counter,
    children 
}) => (
    <div
        className={className}
    >
        <IsLiked>
            {liked}
        </IsLiked>
        <TrackTitle>
            {title}
        </TrackTitle>
        <ArtistName>
            {artist}
        </ArtistName>
        <ListeningCounter>
            {counter}
        </ListeningCounter>
        {children}
    </div>
);
export const TracksList = ({ children }) => (
    <Tracks>
        {children.map(item => (
            <div
                className="track-item"
                title={item.TrackName}
                artist={item.Artist}
                key={item.Index}
                liked={item.IsLoved}
                counter={item.ListeningCounter}
            >
                <img src={item.Image}  alt="album-image"/>
            </div>
        ))}
    </Tracks>
);