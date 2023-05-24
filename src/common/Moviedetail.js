import React from 'react'

export default function Moviedetail(props) {
  const { detailType, detail } = props;
  return (
    <>
      <div className='d-flex col-12'>
        <div className='col-6 d-flex justify-content-between'>
          <div className='detailType'> {detailType} </div>
          <div> :</div>
        </div>
        <div className='col-6 d-flex justify-content-start'>
          <div className='detailText'>{detail}</div>
        </div>
      </div>
    </>
  )
}
