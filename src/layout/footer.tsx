export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoName = process.env.NEXT_PUBLIC_LOGO?.toLocaleLowerCase();

  return (
    <footer className="h-footer flex-none">
      <div className="mx-auto flex h-full w-full max-w-[1100px] items-center justify-end px-8 md:px-6">
        <p className="text-[14px] text-gray-500 sm:text-[12px]">{`${currentYear} ${logoName}.`}</p>
      </div>
    </footer>
  );
}
