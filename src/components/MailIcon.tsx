import { Mail } from "lucide-react";

type MailIconProps = {
  className?: string;
  fill?: string;
};

export const MailIcon = ({ className }: MailIconProps) => {
  return (
    <a
      href="mailto:kienpt5kkd@gmail.com"
      className={className}
      aria-label="Email Kien Pham"
    >
      <Mail width={20} />
    </a>
  );
};
