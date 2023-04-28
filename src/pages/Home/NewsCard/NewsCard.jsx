import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegShareSquare, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex  gap-3'>
                    <Image style={{ height: "46px" }} src={author.img} roundedCircle />
                    <div>
                        <h5 className='mb-0'>{author?.name}</h5>
                        <p className='text-secondary mb-0'>{moment(author?.published_date).format('yyyy-MM-D')}{ }</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-3 fs-4'></FaRegBookmark>
                    <FaShareAlt className='fs-4'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top' src={image_url}></Card.Img>
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link className='text-decoration-none text-danger font-weight-bold' to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                <Rating 
                      placeholderRating={rating?.number }
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar className='text-danger '></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                      readonly
                      
                /> <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;