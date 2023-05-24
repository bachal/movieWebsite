import React from 'react'

const Loader = () => {
    return (
        <><div className='text-center'>
            <div className='loader text-white'>Loading....</div>
            <div class="spinner-grow text-primary" role="status">
            </div>
            <div class="spinner-grow text-secondary" role="status">
            </div>
            <div class="spinner-grow text-success" role="status">
            </div>
            <div class="spinner-grow text-danger" role="status">
            </div>
            <div class="spinner-grow text-warning" role="status">
            </div>
        </div>
        </>
    )
}

export default Loader