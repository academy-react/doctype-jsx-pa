// ** React Imports
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/slider/03.jpg'
import img2 from '@src/assets/images/slider/02.jpg'
import img3 from '@src/assets/images/slider/01.jpg'

const NoItemFromDb = ({title}) => {
  return (
    <Row className='match-height mb-2'>
      <Col>
        <Card className='d-flex justify-content-center justify-items-center'>
          {/* <CardImg top src={img1} alt='card1' /> */}
          <CardBody className='text-center'>
            <CardTitle tag='h3' className='text-lg font-weight-bold' >{title}</CardTitle>
            <CardText>
                داده‌ای در دیتابیس وجود ندارد.
            </CardText>
          </CardBody>
          {/* <CardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </CardFooter> */}
        </Card>
      </Col>
      {/* <Col md='4' xs='12'>
        <Card>
          <CardImg top src={img2} alt='card2' />
          <CardBody>
            <CardTitle tag='h4'>Card title</CardTitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
          <CardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </Col>
      <Col md='4' xs='12'>
        <Card>
          <CardImg top src={img3} alt='card3' />
          <CardBody>
            <CardTitle tag='h4'>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has
              even longer content than the first to show that equal height action.
            </CardText>
          </CardBody>
          <CardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </Col> */}
    </Row>
  )
}

export default NoItemFromDb
