import { useState, useEffect } from 'react';
import doctorsData from '../data/doctors.json';

export const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay
    const timer = setTimeout(() => {
      setDoctors(doctorsData);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { doctors, isLoading };
};
