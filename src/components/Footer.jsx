function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-gray-50)] py-14 px-4">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-semibold text-center text-sm">
          Copyright &copy; <span>{currentYear}</span> All rights reserved.
          Design & Developed by ahmed_hosny
        </p>
      </div>
    </footer>
  );
}

export default Footer;
