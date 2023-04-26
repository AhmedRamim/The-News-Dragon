import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='mt-4 pt-2 bg-light p-2'>
            <h4 className='my-4'>Q-Zone</h4>
            <div className='text-center py-3'>
                <img src={qzone1} alt="" />
                <img className='py-4' src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;