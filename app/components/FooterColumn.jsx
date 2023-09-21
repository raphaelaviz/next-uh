import Link from "next/link";

const FooterColumn = ({ title, links }) => (
    <div className="footer_column">
        <p className="font-semibold text-uphold-darker sm:mb-4">{title}</p>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => (
                <li>
                    <Link
                        href={link.href} 
                        key={link.text} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline"
                        >
                        {link.text}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterColumn