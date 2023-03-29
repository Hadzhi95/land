import Index from './pages/Index/Index';
import { Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TrainingAgreement from './components/TrainingAgreement/TrainingAgreement';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Index />}/>
        <Route path ='/privacy' element={<PrivacyPolicy />}/>
        <Route path ='/agreement' element={<TrainingAgreement/>}/>
      </Routes>
        {/* <Index /> */}
    </div>
  )
}

export default App