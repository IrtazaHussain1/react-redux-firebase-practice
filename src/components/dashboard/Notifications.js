import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className='section'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Notifications</span>
                    <ul className='notification'>
                        {notifications && notifications.map(notify => {
                            return <li key={notify.id}>
                                <span className='pink-text'>{notify.user} </span>
                                <span>{notify.content}</span>
                                <div className='grey-text note-date'>
                                    {moment(notify.time.toDate()).fromNow()}
                                </div>
                            </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications