'use client';

import { useEffect, useState } from 'react';
import { Download, X, Smartphone, Wifi, WifiOff } from 'lucide-react';

const PWAManager = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);
  const [hasCheckedConnection, setHasCheckedConnection] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // تسجيل Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // التعامل مع حدث التثبيت
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    // التحقق من حالة الاتصال
    const handleOnline = () => {
      const wasOffline = !isOnline && hasCheckedConnection;
      setIsOnline(true);

      // إظهار رسالة الاستعادة فقط إذا كان غير متصل من قبل وتم فحص الاتصال مسبقاً
      if (wasOffline) {
        setShowOnlineMessage(true);
        setTimeout(() => setShowOnlineMessage(false), 3000);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setHasCheckedConnection(true);
    };

    // التحقق من التثبيت
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('appinstalled', handleAppInstalled);

    // التحقق من حالة الاتصال الأولية (بدون إظهار رسالة)
    setIsOnline(navigator.onLine);
    setHasCheckedConnection(true);

    // التحقق من التثبيت المسبق
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismissInstall = () => {
    setShowInstallPrompt(false);
    // إخفاء الرسالة لمدة أسبوع
    localStorage.setItem('installPromptDismissed', Date.now().toString());
  };

  // التحقق من إخفاء الرسالة مسبقاً
  useEffect(() => {
    const dismissedTime = localStorage.getItem('installPromptDismissed');
    if (dismissedTime) {
      const oneWeek = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - parseInt(dismissedTime) < oneWeek) {
        setShowInstallPrompt(false);
      }
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* مؤشر حالة الاتصال */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center py-2 z-50">
          <div className="flex items-center justify-center gap-2">
            <WifiOff className="w-4 h-4" />
            <span>غير متصل بالإنترنت</span>
          </div>
        </div>
      )}

      {/* رسالة التثبيت */}
      {showInstallPrompt && !isInstalled && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-gold p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">ثبت التطبيق</h3>
                  <p className="text-sm opacity-90">للوصول السريع</p>
                </div>
              </div>
              <button
                onClick={handleDismissInstall}
                className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <p className="text-gray-600 mb-4">
              ثبت تطبيق أحمد نور للإيبوكسي للحصول على:
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                وصول سريع من الشاشة الرئيسية
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                عمل بدون إنترنت
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                إشعارات العروض الجديدة
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                تجربة تطبيق أصلي
              </li>
            </ul>

            <div className="flex gap-3">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                تثبيت الآن
              </button>
              <button
                onClick={handleDismissInstall}
                className="px-4 py-3 text-gray-500 hover:text-gray-700 transition-colors"
              >
                لاحقاً
              </button>
            </div>
          </div>
        </div>
      )}

      {/* مؤشر الاتصال المستعاد */}
      {showOnlineMessage && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-2 z-50 transform transition-transform duration-300">
          <div className="flex items-center justify-center gap-2">
            <Wifi className="w-4 h-4" />
            <span>تم استعادة الاتصال</span>
          </div>
        </div>
      )}
    </>
  );
};

// دالة لطلب إذن الإشعارات
export const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  return false;
};

// دالة لإرسال إشعار محلي
export const sendLocalNotification = (title: string, options?: NotificationOptions) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      ...options
    });
  }
};

// دالة للاشتراك في الإشعارات
export const subscribeToNotifications = async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      });

      // إرسال الاشتراك إلى الخادم
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
      });

      return subscription;
    } catch (error) {
      console.error('Error subscribing to notifications:', error);
      return null;
    }
  }
  return null;
};

export default PWAManager;
