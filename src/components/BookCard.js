import React from "react";
import TextTruncate from "react-text-truncate";

const BookCard = props => {
    const { volumeInfo } = props.info;
    const { title, description } = volumeInfo;

    const getThumbnail = volumeInfo.imageLinks
        ? volumeInfo.imageLinks.thumbnail
        : "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337";

    return (
        <div className="card-container">
            <img src={getThumbnail} alt="book" />
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
