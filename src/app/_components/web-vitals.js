'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  const handleMetric = (metric) => {
    console.log(metric.name, metric);

    const body = JSON.stringify(metric);
    const url = '/api/analytics';

    navigator.sendBeacon(url, body);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).catch((error) => {
      console.error('Error reporting web vitals:', error);
    });
  };

  useReportWebVitals(handleMetric);

  return null;
}
