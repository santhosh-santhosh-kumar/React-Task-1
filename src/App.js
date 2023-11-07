import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Card';
function App() {
  return (
    <section className="pricing py-5">
    <div className="container">
    <div className="row">

      <Card head='FREE' value='0' attr='text-muted' />
      <Card head='PLUS' value='9' st={{opacity:'0.7'}} st1={{display:'none'}}  icon=<i className='fas fa-times'></i> />
      <Card head='PRO' value='49'/>
      </div>  
      </div>
      </section>
  );
}

export default App;
