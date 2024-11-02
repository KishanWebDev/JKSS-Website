import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Image, Mail, Plus, Trash2 } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    // Fetch admin stats and gallery images
    const fetchData = async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStats({
        totalStudents: 150,
        activeCourses: 7,
        galleryImages: 25,
        pendingEnquiries: 10
      });

      setGalleryImages([
        { id: 1, url: '/Jan Kalyan Sewa Samiti Institute.png', title: 'Campus View' },
        { id: 2, url: '/Lab.jpeg', title: 'Computer Lab' },
        { id: 3, url: '/Institute Ceremony.jpeg', title: 'Institute Ceremony' },
      ]);
    };

    fetchData();
  }, []);

  const handleAddImage = () => {
    if (newImage) {
      const newImageObj = {
        id: Date.now(),
        url: URL.createObjectURL(newImage),
        title: 'New Image'
      };
      setGalleryImages([...galleryImages, newImageObj]);
      setNewImage(null);
      toast.success('Image added successfully!');
    } else {
      toast.error('Please select an image to upload');
    }
  };

  const handleDeleteImage = (id) => {
    setGalleryImages(galleryImages.filter(img => img.id !== id));
    toast.success('Image deleted successfully!');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  if (!stats) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-8  mt-16"
    >
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Users className="w-12 h-12 text-blue-500 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Students</h2>
            <p className="text-3xl font-bold">{stats.totalStudents}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <BookOpen className="w-12 h-12 text-green-500 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Active Courses</h2>
            <p className="text-3xl font-bold">{stats.activeCourses}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image className="w-12 h-12 text-purple-500 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Gallery Images</h2>
            <p className="text-3xl font-bold">{stats.galleryImages}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Mail className="w-12 h-12 text-red-500 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Pending Enquiries</h2>
            <p className="text-3xl font-bold">{stats.pendingEnquiries}</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Gallery Management</h2>
        <div className="mb-4">
          <input
            type="file"
            onChange={(e) => setNewImage(e.target.files[0])}
            className="mb-2"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddImage}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Image
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map(image => (
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
      </div>
    </motion.div>
  );
};

export default AdminDashboard;