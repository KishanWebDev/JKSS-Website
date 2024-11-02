import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const BlogSection = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'New Batch Starting for "O" Level Course',
      excerpt: 'Join our new batch starting next month with special early bird discounts...',
      content: 'Full content here...',
      author: 'Admin',
      date: '2024-03-15',
      readTime: '5 min',
      image: '/New Batch.jpeg'
    },
    {
      id: 2,
      title: 'New Batch Starting for "CCC" Course',
      excerpt: 'Enroll in our CCC course with limited seats and exciting early bird discounts...',
      content: 'Full content here...',
      author: 'Admin',
      date: '2024-04-20',
      readTime: '4 min',
      image: '/CCC Batch.jpeg'
    }
    
    // Add more posts
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;