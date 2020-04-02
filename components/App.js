import React from "react";
import {GenresFilter, LanguageFilter, LikesFilter} from "./Filters";
import {TracksList} from "./TracksList";
import {CounterFilter} from "./FilterInput";

export const App = ({ tracks }) => {
    const genres = React.useMemo(
        () => [
            ...new Set(tracks.map(item => item.Genre))
        ], [ tracks ]
    );

    const likes = React.useMemo(
        () => [
            ...new Set(tracks.map(item => item.IsLoved))
        ], [ tracks ]);

    const languages = React.useMemo(
        () => [
            ...new Set(tracks.map(item => item.Language))
        ], [ tracks ]
    );

    const [ genre, setGenre ] = React.useState("");
    const [ like, setLike ] = React.useState([]);
    const [ language, setLanguage] = React.useState([]);
    const [ counter, setCounter] = React.useState([ "", "" ]);

    const onGenreChange = e => setGenre(e.target.value);

    const onLikeChange = ({ target: { checked, value } }) => {
        setLike((!like.includes(value) && checked)
            ? [ ...like, value ]
            : like.filter(n => n !== value)
        );
    };

    const onLanguageChange = ({ target: { checked, value } }) => {
        setLanguage((!like.includes(value) && checked)
            ? [ ...like, value ]
            : like.filter(n => n !== value)
        );
    };
    const onCounterChange = ({ target: { value, dataset: { index } } }) => {
        setCounter(counter.map((n, i) => i === +index ? value : n));
    };

    const filteredTracks = tracks.filter(item => (
        (!genre || item.genre === genre) &&
        (!like.length || like.includes(item.like)) &&
        (!counter[0] || counter[0] <= item.cost) &&
        (!counter[1] || counter[1] >= item.cost)
    ));

    return (
        <div>
            <div className="filters">
                <GenresFilter
                    value={genres}
                    onChange={onGenreChange()}
                    genres={genres}
                />
                <LikesFilter
                    value={likes}
                    onChange={onLikeChange()}
                    likes={likes}
                />
                <LanguageFilter
                    value={language}
                    onChange={onLanguageChange()}
                    languages={languages}
                />
                <CounterFilter
                    value={language}
                    onChange={onCounterChange()}
                    languages={languages}
                />
            </div>
            <TracksList
                tracks = {filteredTracks}
            />
        </div>
    );
};

