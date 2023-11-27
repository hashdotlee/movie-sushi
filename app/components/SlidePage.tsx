interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function SidePage({ children, isOpen, setIsOpen }: IProps) {
  return (
    <div
      className={`absolute w-0
    ${!isOpen ? "hidden" : "block"}
    h-0 top-0 left-0`}
    >
      <div
        className={`absolute bg-white dark:bg-zinc-900 z-[70] w-sidebar-mobile h-screen top-0 left-0 ${
          isOpen ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        {children}
      </div>
      <div
        className={`absolute bg-zinc-900/70 z-[60] w-screen h-screen ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
}
