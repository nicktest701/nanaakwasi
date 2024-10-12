import Content from "../content";

function Footer() {
  return (
    <footer className="bg-secondary-900 border-t border-white/5">
      <p className="text-center text-white py-4 z-40" >
        &copy; {new Date().getFullYear()}. Designed by Nana Akwasi. All right
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
