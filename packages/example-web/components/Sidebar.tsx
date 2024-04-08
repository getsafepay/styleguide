import { Button, useTheme, Themes, mergeClasses } from '@sfpy/styleguide';
import { SwatchBookIcon as ThemeIcon } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import { SidebarLink } from '@/components/SidebarLink';

export function Sidebar() {
  const { themeName, setDarkMode, setLightMode } = useTheme();

  function toggleTheme() {
    if (themeName === Themes.AUTO || themeName === Themes.LIGHT) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  return (
    <div
      className={mergeClasses(
        'sticky top-8 h-min z-10',
        'max-sm-gutters:-m-8 max-sm-gutters:p-8 max-sm-gutters:top-0 max-sm-gutters:bg-default max-sm-gutters:border-b max-sm-gutters:border-b-secondary'
      )}>
      <div
        className={mergeClasses(
          'flex flex-col gap-5',
          'max-sm-gutters:items-center max-sm-gutters:flex-row max-sm-gutters:mb-5'
        )}>
        <Link href="/">
          <Image src="/icon.png" width="72" height="72" alt="Expo Styleguide Logo" className="max-sm-gutters:hidden" />
          <Image
            src="/icon.png"
            width="40"
            height="40"
            alt="Expo Styleguide Logo"
            className="hidden min-w-[40px] max-sm-gutters:block"
          />
        </Link>
        <Button
          className="hidden min-w-[40px] h-10 max-sm-gutters:flex"
          theme="secondary"
          leftSlot={<ThemeIcon />}
          onClick={toggleTheme}
        />
      </div>
      <SidebarLink href="/colors" text="Colors" />
      <SidebarLink href="/typography" text="Typography" />
      <p className="heading-xl font-medium select-none">UI</p>
      <SidebarLink size="sm" href="/ui/components" text="Components" />
      <Button
        className="mt-4 fixed bottom-8 max-sm-gutters:hidden"
        theme="secondary"
        leftSlot={<ThemeIcon />}
        onClick={toggleTheme}>
        Toggle theme
      </Button>
    </div>
  );
}
