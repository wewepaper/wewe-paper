import { Button } from '../ui/button';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[55px] border-b border flex items-center justify-between px-4 z-10 max-w-[425px] mx-auto w-full">
      {/* 메뉴 아이콘 */}
      <div className="absolute left-4">
        <Button variant="outline">Menu</Button>
      </div>
      {/* 타이틀 */}
      <div className="flex-1 text-center font-bold">WeWe Paper</div>
    </header>
  );
}
export default Header;
