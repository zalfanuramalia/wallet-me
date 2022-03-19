import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Container, Row, Col } from 'react-bootstrap'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

import { Bar } from 'react-chartjs-2'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'

const BarCharts = ({labels, data: rawData, income=0, expense=0})=> {
const options = {
    chartAreaBorder: {
      borderColor: 'rgba(0, 0, 0, 0)'
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
    },
  };
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: rawData,
        backgroundColor: '#6379F4',
        borderRadius: 1000,
        barThickness: 14
      }
    ],
  };
  return (
    <Container>
        <Row>
            <Col xs={6}>
                <div>
                    <FaArrowDown color="#1EC15F" />
                </div>
                <div>Income</div>
                <div>Rp. {Number(income).toLocaleString('id-ID')}</div>
            </Col>
            <Col xs={6}>
                <div>
                    <FaArrowUp color="#FF5B37" />
                </div>
                <div>Expense</div>
                <div>Rp. {Number(expense).toLocaleString('id-ID')}</div>
            </Col>
            <Col xs={12}>
                <Bar options={options} data={data}  />
            </Col>
        </Row>
    </Container>  
  )
}

export default BarCharts