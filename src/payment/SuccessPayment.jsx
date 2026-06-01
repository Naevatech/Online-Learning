import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContent } from "../context/AppContext";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


function SuccessPayment() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const courseId = searchParams.get('courseId');
  const navigate = useNavigate();
  const { backendUrl, userData } = useContext(AppContent);
  const [status, setStatus] = useState('pending');

  const confirmPaymentOnBackend = async (sid, uid) => {
    try {
      const response = await fetch(backendUrl + '/api/course/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            sessionId: sid, 
            courseId: courseId,
            userId: uid // Pass the UID directly
        }), 
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        toast.success("Payment verified! Enrollment complete.");
        navigate("/"); // Redirect to homepage or dashboard after success
      } else {
        setStatus('error');
        toast.error(data.message || "Verification failed.");
      }
    } catch (error) {
      console.error("Verification Error:", error);
      setStatus('error');
    }
  };

  useEffect(() => {
    // ONLY run if we have both the Stripe Session AND the User Data
    if (sessionId && userData && userData._id) {
      console.log("Verifying for User:", userData._id);
      confirmPaymentOnBackend(sessionId, userData._id);
    }
  }, [sessionId, userData]); // dependency array is correct

  return (
    <div className="text-center mt-10">
      {status === 'pending' && <h1>Verifying Payment...</h1>}
      {status === 'success' && <h1 className="text-success">Payment Successful! Check your dashboard.</h1>}
      {status === 'error' && <h1 className="text-danger">Verification Failed.</h1>}
    </div>
  );
}

export default SuccessPayment;