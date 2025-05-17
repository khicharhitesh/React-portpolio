export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-lime-500 py-6 text-center">
      <p className="text-green-400">
        &copy; {new Date().getFullYear()} Hitesh Khichar. All rights reserved.
      </p>
      <div className="flex justify-center mt-3 gap-4 text-xl">
        <SocialLink href="https://github.com/" icon="fa-github" />
        <SocialLink href="https://linkedin.com/in/hitesh-khichar-35b310333/" icon="fa-linkedin" />
        <SocialLink href="https://x.com/hit3084" icon="fa-twitter" />
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="hover:text-lime-500 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`fa-brands ${icon}`}></i>
    </a>
  );
}
