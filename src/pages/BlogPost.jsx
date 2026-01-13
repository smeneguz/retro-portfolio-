import { useParams, Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { getBlogPosts } from '../utils/siteData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faClock, faFolder } from '@fortawesome/free-solid-svg-icons';
import './BlogPost.css';

const BlogPost = () => {
  const blogPosts = getBlogPosts();
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <Card className="not-found-card">
            <div className="not-found">
              <h1 className="text-primary">404 - POST NOT FOUND</h1>
              <p>The blog post you're looking for doesn't exist.</p>
              <Link to="/blog">
                <Button variant="primary">← BACK TO BLOG</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <Link to="/blog" className="back-link">
          <Button variant="ghost" size="small">← BACK TO BLOG</Button>
        </Link>

        <article className="blog-post-article">
          <Card className="blog-post-content">
            <header className="blog-post-header">
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span className="meta-item">
                  <FontAwesomeIcon icon={faUser} />
                  {post.author}
                </span>
                <span className="meta-item">
                  <FontAwesomeIcon icon={faCalendar} />
                  {post.date}
                </span>
                <span className="meta-item">
                  <FontAwesomeIcon icon={faClock} />
                  {post.readTime}
                </span>
                <span className="meta-item">
                  <FontAwesomeIcon icon={faFolder} />
                  {post.category}
                </span>
              </div>
              <div className="blog-post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="post-tag">#{tag}</span>
                ))}
              </div>
            </header>

            <div className="blog-post-body">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-primary">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                } else if (paragraph.trim().startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-secondary">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.trim().startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-accent">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                  return (
                    <p key={index} className="highlight-text">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                } else if (paragraph.trim() !== '') {
                  return <p key={index}>{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </Card>

          <div className="blog-post-footer">
            <Card className="share-card">
              <h3 className="text-primary">SHARE THIS POST</h3>
              <div className="share-buttons">
                <Button variant="ghost" size="small">Twitter</Button>
                <Button variant="ghost" size="small">LinkedIn</Button>
                <Button variant="ghost" size="small">Copy Link</Button>
              </div>
            </Card>
          </div>
        </article>

        <aside className="blog-sidebar">
          <Card title="MORE POSTS" className="sidebar-card">
            <div className="related-posts">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="related-post"
                  >
                    <h4 className="related-post-title">{relatedPost.title}</h4>
                    <p className="related-post-date">{relatedPost.date}</p>
                  </Link>
                ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
