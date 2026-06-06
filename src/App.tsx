// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>首页内容</h2>;
}

function About() {
  return <h2>关于我们</h2>;
}

function Feature() {
  return <h2>功能页面</h2>;
}


function App() {
  // const [count, setCount] = useState(0)

  return (
       <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        
        {/* 左侧菜单 */}
        <div style={{
          width: '200px',
          background: '#f5f5f5',
          padding: '20px',
          borderRight: '1px solid #ddd'
        }}>
          <h3>菜单</h3>
          <div>
            <Link to="/" style={{ display: 'block', margin: '10px 0' }}>首页</Link>
            <Link to="/about" style={{ display: 'block', margin: '10px 0' }}>关于</Link>
            <Link to="/feature" style={{ display: 'block', margin: '10px 0' }}>功能</Link>
          </div>
        </div>

        {/* 右侧内容区域 */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feature" element={<Feature />} />
          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default App
