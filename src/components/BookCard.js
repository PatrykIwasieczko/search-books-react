import React, { Component } from "react";
import TextTruncate from "react-text-truncate";

class BookCard extends Component {
    getThumbnail = volumeInfo => {
        return volumeInfo.imageLinks
            ? volumeInfo.imageLinks.thumbnail
            : "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337";
    };

    render() {
        const { volumeInfo } = this.props.info;
        const { title, description } = volumeInfo;

        return (
            <div className="card-container">
                <img src={this.getThumbnail(volumeInfo)} alt={title} />
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
    }
}

export default BookCard;
