const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-bold text-lg">
          KODA<span className="text-primary">.</span>
        </p>
        <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-text/40">
          <button className="hover:text-text">Github</button>
          <button className="hover:text-text">Twitter</button>
          <button className="hover:text-text">Discord</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
