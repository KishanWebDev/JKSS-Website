import React from 'react';
import { useEffect } from 'react';

const RazorpayPayment = ({ course, onSuccess, onFailure }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openPayModal = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: parseFloat(course.admissionFee.replace(/[^0-9.-]+/g,"")) * 100, // Amount in paise
      currency: "INR",
      name: "JKSS Academy",
      description: `Admission fee for ${course.name}`,
      image: "/JKSS logo.jpg", // Replace with your logo URL
      handler: function (response) {
        onSuccess(response);
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      notes: {
        address: "JKSS Academy, Jaunpur"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response){
      onFailure(response.error);
    });
    rzp.open();
  };

  return (
    <button
      onClick={openPayModal}
      className={`bg-${course.color}-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-${course.color}-700 transition duration-300 flex items-center justify-center w-full`}
    >
      Pay Now
    </button>
  );
};

export default RazorpayPayment;