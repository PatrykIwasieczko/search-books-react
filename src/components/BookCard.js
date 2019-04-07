import React from "react";
import TextTruncate from "react-text-truncate";

const BookCard = props => {
    const { volumeInfo } = props.info;
    const { title, description } = props.info.volumeInfo;
    const thumbNail =
        volumeInfo.hasOwnProperty("imageLinks") === false
            ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337"
            : volumeInfo.imageLinks.thumbnail;

    return (
        <div className="card-container">
            <img src={thumbNail} alt="book" />
            <div className="desc">
                <h2>{title}</h2>
                <p>
                    <TextTruncate
                        line={4}
                        truncateText="…"
                        text={description}
                    />
                </p>
            </div>
        </div>
    );
};

export default BookCard;
