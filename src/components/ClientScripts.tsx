'use client';

import { useEffect } from 'react';

const ClientScripts = () => {
  useEffect(() => {
    // أي scripts تحتاج client-side يمكن إضافتها هنا
    console.log('Client scripts loaded');
  }, []);

  return null;
};

export default ClientScripts;
