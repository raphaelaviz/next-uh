import Link from "next/link";

const FooterColumn = ({ title, links }) => (
    <div className="footer_column">
        <h4 className="font-semibold text-uphold-darker sm:mb-4">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => (
                <Link
                    href={link.href} 
                    key={link.text} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                >
                    {link.text}
                </Link>
            ))}
        </ul>
    </div>
);

export default FooterColumn