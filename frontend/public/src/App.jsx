import './App.css'
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav'
import Layout from './components/Layaout';
import Dashboard from './screens/Dasboard';

function App() {
  return (
    <Layout>
            <Dashboard />
      <Footer />
    </Layout>
  )
}

export default App