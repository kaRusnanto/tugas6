import React, {useState} from "react";
import DataMovie from "../utils/constans/DataMovie";
import Movie from "./Movie/Movie";
import styles from "./Movies.module.css";

function Movies() {

    // state
    const [item, setItem] = useState(DataMovie);

    const handleClick = () => {
        const movie = {
            id: 4,
            title: "THE MOVIE RED",
            date: "19 oktober 2022",
            Image: "https://i.pinimg.com/originals/75/a0/f7/75a0f72a0031cbd9b5d6efed2dca95c7.jpg"
        }

        setItem([...item, movie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movie</h2>
                <div className={styles.movie__container}>
                    {
                        item.map(function(data) {
                            return (
                                
                                <Movie key={data.id} title= {data.title} data= {data.date} Image={data.Image}/>
                                
                            )
                        })
                    }
                </div>
               
            </section>
        </div>
    );
}

export default Movies;