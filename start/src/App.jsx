// App.jsx
import { useState } from 'react';
import ResourceList from './components/ResourceList'
import Layout from './components/Layout'
import { Route, Routes} from 'react-router-dom'
import './styles/styles.scss'; // Import the main SCSS file

function App() {
  const [Resources, setResources] = useState([]);



    return (
      <Layout>
          <Routes>
              
              
              
              <Route path=":slug" element={<ResourceList />}/>
              
          </Routes>
          </Layout>

    )
  }

export default App;
