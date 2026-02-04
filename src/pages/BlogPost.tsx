import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getBlogPostBySlug, getRecentPosts } from '../data/blogPosts'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined
  const recentPosts = getRecentPosts(4).filter(p => p.slug !== slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://cigana.space/blog/${post.slug}`} />
        
        <link rel="canonical" href={`https://cigana.space/blog/${post.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.metaDescription,
            "datePublished": post.publishedAt,
            "author": {
              "@type": "Organization",
              "name": "Cigana.space"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cigana.space",
              "url": "https://cigana.space"
            }
          })}
        </script>
      </Helmet>

      <article className="blog-post">
        <header className="post-header">
          <div className="container">
            <Link to="/blog" className="back-link">← Voltar ao Blog</Link>
            <div className="post-meta">
              <span className="post-category">{post.category}</span>
              <span className="post-time">📖 {post.readTime} min de leitura</span>
            </div>
            <h1>{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
          </div>
        </header>

        <div className="post-body">
          <div className="container">
            <div className="post-content">
              <div 
                className="prose"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </div>

            <aside className="post-sidebar">
              <div className="sidebar-section">
                <h3>Artigos Relacionados</h3>
                <div className="related-posts">
                  {recentPosts.slice(0, 3).map(relatedPost => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="related-post"
                    >
                      <span className="related-emoji">🎴</span>
                      <span className="related-title">{relatedPost.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sidebar-section cta-box">
                <h3>🔮 Quer uma tiragem?</h3>
                <p>Em breve você poderá consultar o Baralho Cigano com nossa IA.</p>
                <button className="btn btn-primary" disabled>Em Breve</button>
              </div>
            </aside>
          </div>
        </div>

        <footer className="post-footer">
          <div className="container">
            <div className="share-section">
              <span>Compartilhe:</span>
              <div className="share-buttons">
                <a href="#" className="share-btn">WhatsApp</a>
                <a href="#" className="share-btn">Twitter</a>
                <a href="#" className="share-btn">Facebook</a>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  )
}

function formatContent(content: string): string {
  // Simple markdown-like formatting
  return content
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match
      return `<p>${match}</p>`
    })
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<h[2-4]>)/g, '$1')
    .replace(/(<\/h[2-4]>)<\/p>/g, '$1')
    .replace(/<p>(<ul>)/g, '$1')
    .replace(/(<\/ul>)<\/p>/g, '$1')
    .replace(/<p>(<pre>)/g, '$1')
    .replace(/(<\/pre>)<\/p>/g, '$1')
    .replace(/<p>(<li>)/g, '$1')
    .replace(/(<\/li>)<\/p>/g, '$1')
    .replace(/---/g, '<hr />')
    .replace(/\| (.*) \|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      const isHeader = cells.every(c => c.includes('---'))
      if (isHeader) return ''
      return `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`
    })
}
