import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card my-4" >
                <span className="position-absolute d-flex top-0 badge rounded-pill bg-danger" style={{right: '0'}}>{source}</span>
                <img src={!imageUrl ? "https://images.news18.com/ibnlive/uploads/2021/09/dharavi-slum-covid-163155854916x9.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By: {!author ? "Unknown" : author} <br /> On: {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
