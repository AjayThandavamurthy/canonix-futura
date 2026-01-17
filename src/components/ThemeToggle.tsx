import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-all duration-300 group"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <Sun
        className={`h-5 w-5 transition-all duration-300 absolute ${
          resolvedTheme === 'dark'
            ? 'opacity-0 rotate-90 scale-0'
            : 'opacity-100 rotate-0 scale-100 text-foreground'
        }`}
      />
      <Moon
        className={`h-5 w-5 transition-all duration-300 absolute ${
          resolvedTheme === 'dark'
            ? 'opacity-100 rotate-0 scale-100 text-foreground'
            : 'opacity-0 -rotate-90 scale-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
