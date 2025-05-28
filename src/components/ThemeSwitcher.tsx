'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Palette, Droplets } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'light',
      name: 'فاتح',
      icon: Sun,
      colors: 'from-blue-500 to-blue-600',
      description: 'الوضع الفاتح'
    },
    {
      id: 'dark',
      name: 'داكن',
      icon: Moon,
      colors: 'from-gray-700 to-gray-900',
      description: 'الوضع الداكن'
    },
    {
      id: 'blue',
      name: 'أزرق',
      icon: Droplets,
      colors: 'from-blue-600 to-indigo-700',
      description: 'الثيم الأزرق'
    },
    {
      id: 'green',
      name: 'أخضر',
      icon: Palette,
      colors: 'from-green-600 to-emerald-700',
      description: 'الثيم الأخضر'
    }
  ];

  const currentTheme = themes.find(t => t.id === theme);

  return (
    <div className="relative">
      {/* زر التبديل */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-gray-700 dark:text-white transition-all duration-300 border border-gray-300 dark:border-gray-600"
        title="تغيير الثيم"
      >
        {currentTheme && <currentTheme.icon className="w-5 h-5" />}
        <span className="hidden sm:block text-sm">{currentTheme?.name}</span>
      </button>

      {/* قائمة الثيمات */}
      {isOpen && (
        <>
          {/* خلفية شفافة للإغلاق */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* القائمة */}
          <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                اختر الثيم
              </div>

              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isActive = theme === themeOption.id;

                return (
                  <button
                    key={themeOption.id}
                    onClick={() => {
                      setTheme(themeOption.id as any);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${themeOption.colors} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    <div className="text-right flex-1">
                      <div className="font-medium text-sm">{themeOption.name}</div>
                      <div className="text-xs opacity-70">{themeOption.description}</div>
                    </div>

                    {isActive && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
