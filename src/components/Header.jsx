import Image from "next/image";
import logo from "../../public/Images/logo.png"; // adjust based on your file

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[72px] bg-background z-50 px-[220px] py-3">
      <div className="max-w-6xl flex items-center justify-between">
        <Image src={logo} alt="Logo" width={25} height={32} />
      </div>
    </header>
  );
}
