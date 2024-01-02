import Logo from "@/components/logo/logo";
import SafeArea from "@/components/safe-area/safe-area";


const Header = () => {
    return (
      <header className="absolute z-10 w-full text-center mt-2">
        <SafeArea>
          <Logo />
        </SafeArea>
      </header>
    )
}

export default Header
