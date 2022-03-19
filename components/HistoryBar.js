import React from 'react'
import Styles from '../styles/HistoryBar.module.scss'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'

const HistoryBar = ({image, name, type, nominal, ...rest}) => {
  return (
    <Row className='py-2'>
      <Col xs={8}>
        <Row>
          <Col xs={4}>
            <Image width={56} height={56} src={image} alt={name} />
          </Col>
          <Col xs={8} className='d-flex flex-column'>
            <div className='text-truncate'>
              {name}
            </div>
            <div>
              <small>{type}</small>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={4} className={`${type==='Transfer' ? Styles.redInfo : Styles.greenInfo} d-flex align-items-center`}>
        {type==='Transfer' ? '-' : '+'}Rp. {Number(nominal).toLocaleString('id-ID')}
      </Col>
    </Row>
  )
}

export default HistoryBar