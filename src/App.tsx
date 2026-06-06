// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
        <div className="app">
      {/* 顶部导航栏 */}
      <header className="navbar">
        <h1 className="logo">RUNOOB Blog</h1>
        <nav>
          <a href="/">首页</a>
          <a href="#">关于</a>
        </nav>
      </header>

      {/* 主内容区 */}
      <main className="container">
        <p>博客内容将在这里展示</p>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <p>© 2024 RUNOOB Blog. Powered by React.</p>
      </footer>
    </div>
  )
}

export default App
