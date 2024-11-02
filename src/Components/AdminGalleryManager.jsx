import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

const AdminGalleryManager = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch gallery images
    // This is a mock implementation. Replace with actual API calls.
    const fetchGalleryImages = async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setImages([
        { id: 1, url: '/placeholder.svg?height=200&width=300', title: 'Campus View' },
        { id: 2, url: '/placeholder.svg?height=200&width=300', title: 'Computer Lab' },
        { id: 3, url: '/placeholder.svg?height=200&width=300', title: 'Graduation Ceremony' },
      ]);
    };

    fetchGalleryImages();
  }, []);

  const handleAddImage = () => {
    // Implement image upload logic here
    console.log('Add image clicked');
  };

  const handleDeleteImage = (id) => {
    // Implement image deletion logic here
    setImages(images.filter(img => img.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8 mt-16"
    >
      <h1 className="text-3xl font-bold mb-8">Gallery Manager</h1>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-6 px-4 py-2 bg-green-500 text-white rounded-md flex items-center"
        onClick={handleAddImage}
      >
        <Plus className="w-5 h-5 mr-2" />
        Add New Image
      </motion.button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map(image => (
          <motion.div
            key={image.id}
            className="bg-white p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={image.url} alt={image.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{image.title}</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-red-500"
                onClick={() => handleDeleteImage(image.id)}
              >
                <Trash2 className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminGalleryManager;