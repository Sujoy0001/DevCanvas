import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white 
      bg-linear-to-br from-blue-500 to-blue-900 relative overflow-hidden px-6">

      <Logo />

      <h1 className="text-4xl md:text-6xl sujoy01 font-bold mt-10 text-center">Launching Soon</h1>

      <p className="text-center text-lg md:text-xl sujoy02 max-w-xl mt-6 text-white/80">
        Build. Grow. Stand Out. — All in One Platform.  
        DevCanvas will empower students & developers to showcase their skills 
        with a professional portfolio.
      </p>

      <div className="mt-10">
        <SocialLinks />
      </div>

    </div>
  );
}
