import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './Logo';
import NavMenu from './NavMenu';
import { AlignJustify } from 'lucide-react';

const MobileNavMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between py-8 h-full">
          <div className="flex flex-col items-center gap-y-24">
            <Logo />
            <NavMenu
              containerStyles={`flex flex-col items-center gap-y-6`}
              linkStyles={`text-lg font-semibold`}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
