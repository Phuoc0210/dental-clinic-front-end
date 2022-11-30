import "./App.css";
import {Routes,Route} from 'react-router-dom'
import {publicRoute} from './routes'
import {DefaultLayout, AdminLayout} from './component/Layout'
function App() {

  return (
    <div className="app">
        <Routes>
            {publicRoute.map( (route, index) => {
                const Page = route.component;
                const Layout = route.layout === 'default' ? DefaultLayout : AdminLayout;
                return <Route 
                          key={index} 
                          path={route.path} 
                          element={
                          <Layout>
                              <Page/>
                          </Layout>
                          }
                        />
            })}
        </Routes>
    </div>
  );
}

export default App;
