export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoName = process.env.NEXT_PUBLIC_TITLE?.toLocaleLowerCase();

  return (
    <footer className="h-footer flex-none border-t border-terminal-border">
      <div className="mx-auto flex h-full w-full max-w-[1100px] items-center justify-end px-8 md:px-6">
        <p className="text-[14px] text-terminal-dim sm:text-[12px]">
          &copy; {currentYear} {logoName}.
        </p>
      </div>
    </footer>
  );
}
