import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import CardPage from './pages/CardPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2D1B4E" />
        <link rel="canonical" href="https://cigana.space" />
      </Helmet>
      
      <div className="bg-pattern" />
      <Stars />
      
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/carta/:slug" element={<CardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

// Background stars component
function Stars() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    size: Math.random() * 2 + 1
  }))

  return (
    <div className="stars">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  )
}

export default App
