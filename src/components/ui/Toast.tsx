'use client';

import React, { useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ message: string; type?: ToastType; duration?: number }>).detail;
      const id = Date.now() + Math.random();
      const toast: ToastItem = {
        id,
        message: detail?.message ?? '',
        type: detail?.type ?? 'info',
      };
      setToasts((prev) => [...prev, toast]);
      const duration = Math.min(Math.max(detail?.duration ?? 2200, 1200), 6000);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    };

    window.addEventListener('toast', handler as EventListener);
    return () => window.removeEventListener('toast', handler as EventListener);
  }, []);

  const getStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-green-600 text-white';
      case 'error':
        return 'bg-red-600 text-white';
      default:
        return 'bg-[#A31D1D] text-white';
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-6 z-[9999] pointer-events-none">
      <div className="mx-auto w-full max-w-sm px-4 flex flex-col items-center gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            aria-live="polite"
            className={`pointer-events-auto w-full rounded-lg shadow-lg px-4 py-3 text-sm font-medium ${getStyles(t.type)} animate-fadeIn`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper: dispatch a toast event (can be called from anywhere in client components)
export const showToast = (message: string, type: ToastType = 'info', duration = 2200) => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('toast', { detail: { message, type, duration } }));
};


