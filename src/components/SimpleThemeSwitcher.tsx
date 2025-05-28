'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Droplets, Leaf } from 'lucide-react';

const SimpleThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'blue':
        return <Droplets className="w-5 h-5" />;
      case 'green':
        return <Leaf className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  const getThemeName = () => {
    switch (theme) {
      case 'light':
        return 'فاتح';
      case 'dark':
        return 'داكن';
      case 'blue':
        return 'أزرق';
      case 'green':
        return 'أخضر';
      default:
        return 'فاتح';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40"
      title={`تغيير الثيم - حالي<|im_start|>: ${getThemeName()}`}
    >
      {getIcon()}
      <span className="hidden sm:block text-sm font-medium">{getThemeName()}</span>
    </button>
  );
};

export default SimpleThemeSwitcher;
