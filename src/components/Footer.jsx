import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className={`!px-0 !py-10`}>
      <div
        className={`container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col`}
      >
        <p className="caption text-n-4 lg:block">
          ©{new Date().getFullYear()}. All rights reserved
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((handle) => (
            <a
              key={handle.id}
              target="_blank"
              href={handle.url}
              className="flex items-center justify-center w-10 h-10 bg-n-7 transition-colors hover:bg-n-6 rounded-full"
            >
              <img
                src={handle.iconUrl}
                alt={handle.title}
                width={16}
                height={16}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
