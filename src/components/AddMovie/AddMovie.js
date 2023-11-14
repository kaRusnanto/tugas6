import React, { useState } from 'react';
import style from "./AddMovie.module.css";

const AddMovie = (props) => {
    const { movies, setMovies } = props;

    const [titleError, setTitleError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [date, setDate] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleLink = (e) => {
        setLink(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" && date === "") {
            alert("Title dan Date kosong");
        } else if (title === "") {
            alert("Isi Title Terlebih Dahulu");
        } else if (date === "") {
            alert("Isi Date Terlebih Dahulu");
        } else {
            const movie = {
                id: 4,
                title: title,
                date: date,
                image: link,
            };
            setMovies([...movies, movie]);
            setTitleError(false);
            setDateError(false);
        }
    };

    return (
        <div className={style.container}>
            <form className={style.addmovie} onSubmit={handleSubmit}>
                <input
                    placeholder='Isi Title Disini'
                    className={style.addmovie__input}
                    id='title'
                    type='text'
                    value={title}
                    onChange={handleTitle}
                />

                <input
                    placeholder='Isi Link Disini'
                    className={style.addmovie__input}
                    id='link'
                    type='text'
                    value={link}
                    onChange={handleLink}
                />

                <input
                    placeholder='Isi Date'
                    className={style.addmovie__input}
                    id='date'
                    type='date'
                    value={date}
                    onChange={handleDate}
                />

                <select
                    placeholder='Isi Opsi'
                    className={style.addmovie__input}
                    id='option'
                    type
                >
                    <option value='action'>Anime</option>
                    <option value='drama'>Action</option>
                    <option value='horror'>Movie</option>
                    <option value='kartun'>kartun</option>
                </select>

                <button className={style.addmovie__button}>input</button>
            </form>
        </div>
    );
};

export default AddMovie;
