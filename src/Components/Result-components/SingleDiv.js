import React from 'react'
import { Star } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

const SingleDiv = ({data}) => {
  const navigate = useNavigate();

  const toRest = (id) => {
    navigate(`/Cart/${id}`);
  };

  return (
    <div className='singleDiv'>
        {data.map((data) => (
          <div className="singleBox" onClick={() => toRest(data.id)}>
            <div className="banner">
              {data.charge && (
                <span className="charge">消費滿${data.charge}</span>
              )}
              {data.discount != "免運費" ? (
                <span className="discount">全單{data.discount}%折扣</span>
              ) : (
                <span className="discount">"免運費"</span>
              )}
              {data.special && (
                <span className="deliveroo">{data.special}</span>
              )}
            </div>

            <img src={data.img} alt={data.name} />

            <div className="deliveryTime">
              <span className="num">
                {data.time} <span className="min">分鐘</span>
              </span>
            </div>

            <div className="description">
              <p>{data.name}</p>
              <div className="rate">
                <Star
                  className="star"
                  size={18}
                  weight="fill"
                  style={
                    data.mark < 4.6
                      ? { color: "#00717C" }
                      : { color: "#4D7C1B" }
                  }
                />
                {data.mark > 4.5 ? (
                  <span
                    className="mark"
                    style={
                      data.mark < 4.6
                        ? { color: "#00717C" }
                        : { color: "#4D7C1B" }
                    }
                  >
                    {data.mark} 極正
                  </span>
                ) : (
                  <span
                    className="mark"
                    style={
                      data.mark < 4.6
                        ? { color: "#00717C" }
                        : { color: "#4D7C1B" }
                    }
                  >
                    {data.mark} 十分正
                  </span>
                )}
                <span className="comment">{data.comment}</span>
              </div>

              <div className="distance">
                <span className="num">{data.distance} 公里</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default SingleDiv