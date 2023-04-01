import 'bootstrap/dist/css/bootstrap.css';
import ReceiptList from './component/ReceiptList';

const App = props => {
  const receipts = ['r1', 'r2', 'r3', 'r3asdfas'];
  return (
    <div className='container mt-5 mb-5'>
      <h1>Receipt Collector</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam ipsum error beatae repudiandae, modi molestiae consequuntur, sint similique quae quisquam adipisci ullam id. Laborum repudiandae totam excepturi! Blanditiis, dicta.
      </p>
      <ReceiptList receipts={receipts}/>
    </div>
  );
}

export default App;
