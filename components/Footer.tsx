const Footer = () => {
  const socials = [
    {
      title: "vk",
      link: "https://vk.com/artemjilinskiy",
    },
    {
      title: "tg",
      link: "#",
    },
    {
      title: "github",
      link: "https://github.com/Skidross",
    },
  ];

  return (
    <footer className="flex items-center justify-between">
      <p className="text-xl">Copyright @2024 Artem</p>

      <ul className="flex items-center gap-4">
        {socials.map((social, idx) => {
          return (
            <li
              className="p-3 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
           
            
            >
              <a href={social.link}>{social.title}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
export default Footer;
