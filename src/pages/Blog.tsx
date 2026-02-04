import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import './Blog.css'

export default function Blog() {
  const categories = [...new Set(blogPosts.map(post => post.category))]

  return (
    <>
      <Helmet>
        <title>Blog | Cigana.space - Aprenda Baralho Cigano</title>
        <meta name="description" content="Artigos e guias completos sobre Baralho Cigano, Tarot e espiritualidade. Aprenda significados das cartas, tiragens e muito mais." />
        <meta name="keywords" content="blog baralho cigano, aprender tarot, significado cartas ciganas, tiragem baralho cigano, espiritualidade" />
        
        <meta property="og:title" content="Blog | Cigana.space - Aprenda Baralho Cigano" />
        <meta property="og:description" content="Artigos e guias completos sobre Baralho Cigano, Tarot e espiritualidade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cigana.space/blog" />
        
        <link rel="canonical" href="https://cigana.space/blog" />
      </Helmet>

      <section className="blog-hero">
        <div className="container">
          <span className="section-badge">Blog</span>
          <h1>Aprenda Baralho Cigano</h1>
          <p>Guias, significados e tudo sobre o mundo das cartas ciganas</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-categories">
            <button className="category-btn active">Todos</button>
            {categories.map(category => (
              <button key={category} className="category-btn">
                {category}
              </button>
            ))}
          </div>

          <div className="blog-articles">
            {blogPosts.map(post => (
              <article key={post.id} className="article-card">
                <Link to={`/blog/${post.slug}`} className="article-link">
                  <div className="article-img">
                    <span>🎴</span>
                  </div>
                  <div className="article-content">
                    <div className="article-meta">
                      <span className="article-category">{post.category}</span>
                      <span className="article-time">📖 {post.readTime} min</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <span className="article-cta">Ler artigo →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
