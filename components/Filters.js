import React from "react";

export const GenresFilter = ({ value, onChange, genres }) => (
    <div className="genres-filter">
        <h2>Жанр</h2>
        <select
            onChange={onChange}
            value={value}
        >
            <option value="">Choose genre</option>
            {genres.map(item =>
                <option
                    key={item}
                >
                    {item}
                </option>
            )}
        </select>
    </div>
);

export const LikesFilter = ({ value, onChange, likes }) => (
    <div className="likes-filter">
        <h2>Понравилось</h2>
        {likes.map(item => (
            <label
                className="is-like"
                key={item}
            >
                <input
                    type="checkbox"
                    value={item}
                    checked={value.includes(item)}
                    onChange={onChange}
                />
                {item}
            </label>
        ))}
    </div>
);

export const LanguageFilter = ({ value, onChange, languages }) => (
    <div className="language-filter">
        <h2>Язык исполнителя</h2>
        {languages.map(item => (
            <label
                className="language"
                key={item}
            >
                <input
                    type="checkbox"
                    value={item}
                    checked={value.includes(item)}
                    onChange={onChange}
                />
                {item}
            </label>
        ))}
    </div>
);