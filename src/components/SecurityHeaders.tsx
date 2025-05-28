'use client';

import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // تأخير تطبيق الأمان لتجنب مشاكل Hydration
    const timer = setTimeout(() => {
      if (typeof window === 'undefined') return;

      // فحص وجود العنصر مسبقاً
      const existingMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (existingMeta) return;

      // إضافة Content Security Policy
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = 'default-src \'self\'; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data: https:;';
      document.head.appendChild(meta);
    }, 2000);

    // منع النقر بالزر الأيمن (اختياري)
    const handleContextMenu = (e: MouseEvent) => {
      if (process.env.NODE_ENV === 'production') {
        e.preventDefault();
      }
    };

    // منع اختصارات لوحة المفاتيح الحساسة
    const handleKeyDown = (e: KeyboardEvent) => {
      if (process.env.NODE_ENV === 'production') {
        // منع F12, Ctrl+Shift+I, Ctrl+U
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u')
        ) {
          e.preventDefault();
        }
      }
    };

    // منع السحب والإفلات
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // منع التحديد للنصوص الحساسة
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('no-select')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return null;
};

// مكون لحماية النماذج من البريد المزعج
export const SpamProtection = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // إضافة حقل مخفي لاكتشاف البوتات
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (!form.querySelector('.honeypot')) {
        const honeypot = document.createElement('input');
        honeypot.type = 'text';
        honeypot.name = 'website';
        honeypot.className = 'honeypot';
        honeypot.style.display = 'none';
        honeypot.tabIndex = -1;
        honeypot.autoComplete = 'off';
        form.appendChild(honeypot);
      }
    });
  }, []);

  return <>{children}</>;
};

// مكون لتشفير البيانات الحساسة
export const DataEncryption = {
  // تشفير بسيط للبيانات المحلية
  encrypt: (data: string): string => {
    if (typeof window === 'undefined') return data;

    try {
      return btoa(encodeURIComponent(data));
    } catch {
      return data;
    }
  },

  // فك التشفير
  decrypt: (encryptedData: string): string => {
    if (typeof window === 'undefined') return encryptedData;

    try {
      return decodeURIComponent(atob(encryptedData));
    } catch {
      return encryptedData;
    }
  },

  // حفظ آمن في localStorage
  setSecureItem: (key: string, value: string): void => {
    if (typeof window === 'undefined') return;

    const encrypted = DataEncryption.encrypt(value);
    localStorage.setItem(key, encrypted);
  },

  // قراءة آمنة من localStorage
  getSecureItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;

    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;

    return DataEncryption.decrypt(encrypted);
  }
};

// مكون لمراقبة الأمان
export const SecurityMonitor = () => {
  useEffect(() => {
    // مراقبة محاولات الوصول غير المصرح بها
    const monitorSecurity = () => {
      // تتبع محاولات فتح أدوات المطور
      let devtools = false;
      const threshold = 160;

      setInterval(() => {
        if (
          window.outerHeight - window.innerHeight > threshold ||
          window.outerWidth - window.innerWidth > threshold
        ) {
          if (!devtools) {
            devtools = true;
            console.clear();
            console.log('%cتحذير أمني!', 'color: red; font-size: 30px; font-weight: bold;');
            console.log('%cهذا المتصفح مخصص للمطورين. إذا لم تكن مطوراً، فقد يكون شخص ما يحاول خداعك لتنفيذ كود ضار.', 'color: red; font-size: 16px;');
          }
        } else {
          devtools = false;
        }
      }, 500);
    };

    // تأخير المراقبة لتجنب التأثير على الأداء
    setTimeout(monitorSecurity, 3000);

    // مراقبة التلاعب بـ DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              // فحص إضافة سكريبتات مشبوهة
              if (element.tagName === 'SCRIPT' && !element.hasAttribute('data-approved')) {
                console.warn('تم اكتشاف سكريبت غير مصرح به:', element);
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

// مكون للحماية من XSS
export const XSSProtection = ({ content }: { content: string }) => {
  const sanitizeContent = (html: string): string => {
    // إزالة السكريبتات والعناصر الخطيرة
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  };

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: sanitizeContent(content)
      }}
    />
  );
};

// مكون للحماية من CSRF
export const CSRFProtection = () => {
  useEffect(() => {
    // إنشاء رمز CSRF
    const generateCSRFToken = (): string => {
      if (typeof window === 'undefined') return 'server-token';
      return Date.now().toString(36) + window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
    };

    // إضافة رمز CSRF لجميع النماذج
    const addCSRFTokens = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        if (!form.querySelector('input[name="csrf_token"]')) {
          const csrfInput = document.createElement('input');
          csrfInput.type = 'hidden';
          csrfInput.name = 'csrf_token';
          csrfInput.value = generateCSRFToken();
          form.appendChild(csrfInput);
        }
      });
    };

    addCSRFTokens();

    // إعادة إضافة الرموز عند تحديث DOM
    const observer = new MutationObserver(addCSRFTokens);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default SecurityHeaders;
