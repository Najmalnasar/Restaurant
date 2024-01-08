import React from 'react'

function Rating({ data }) {
    return (
        <div className='raiting'>
            {data.map((item) => (
                <div>
                    <span>
                        <div>
                            <h6>{item.name}</h6>
                        </div>
                        <div>
                            <p>{item.date}</p>
                            <p>{item.comments}</p>
                        </div>

                    </span>
                </div>
            ))}
        </div>
    )
}

export default Rating
