import React from 'react';
import { useParams } from 'react-router-dom';

const MOCK_POSTS = {
  'understanding-your-customer-base': {
    title: 'Understanding Your Customer Base',
    content: `# Understanding Your Customer Base

Deep customer understanding is the foundation of successful marketing campaigns. When you truly know your customers, you can:

- Create more targeted messaging
- Develop better products and services
- Improve customer satisfaction
- Increase ROI on marketing spend

## The Power of Customer Intelligence

Modern marketing requires more than basic demographic data. You need to understand:

1. Customer motivations
2. Pain points
3. Decision-making processes
4. Buying behaviors

## Getting Started

Begin by gathering data from multiple sources:

- Customer interviews
- Sales data
- Market research
- Social media insights`,
    published_at: '2025-01-23'
  },
  'power-of-targeted-marketing': {
    title: 'The Power of Targeted Marketing',
    content: `# The Power of Targeted Marketing

Targeted marketing is about reaching the right people with the right message at the right time.

## Benefits of Targeted Marketing

- Higher conversion rates
- Better ROI
- Improved customer satisfaction
- Stronger brand loyalty

## Key Strategies

1. Segment your audience
2. Personalize your message
3. Choose the right channels
4. Test and optimize`,
    published_at: '2025-01-22'
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? MOCK_POSTS[slug as keyof typeof MOCK_POSTS] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-8">
          {new Date(post.published_at).toLocaleDateString()}
        </div>
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}
