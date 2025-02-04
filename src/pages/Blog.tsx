import React from 'react';
import { Link } from 'react-router-dom';

const MOCK_POSTS = [
  {
    id: '1',
    title: 'Understanding Your Customer Base',
    slug: 'understanding-your-customer-base',
    excerpt: 'Learn how deep customer insights can transform your marketing strategy.',
    published_at: '2025-01-23'
  },
  {
    id: '2',
    title: 'The Power of Targeted Marketing',
    slug: 'power-of-targeted-marketing',
    excerpt: 'Discover how precise targeting can improve your campaign performance.',
    published_at: '2025-01-22'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>
        <div className="space-y-8">
          {MOCK_POSTS.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                {new Date(post.published_at).toLocaleDateString()}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
