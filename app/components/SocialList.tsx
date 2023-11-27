import { TExternalId } from "@/interfaces/TExternalId";
import Image from "next/image";
import Link from "next/link";

export default function SocialList({
  externalIds = {
    facebook_id: "",
    twitter_id: "",
    instagram_id: "",
  },
}: {
  externalIds?: TExternalId;
}) {
  const socialList = [
    {
      id: "facebook_id",
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: "/facebook-icon.svg",
    },
    {
      id: "twitter_id",
      name: "Twitter",
      url: "https://twitter.com/",
      icon: "/twitter-icon.svg",
    },
    {
      id: "instagram_id",
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: "/instagram-icon.svg",
    },
  ];
  return (
    <div>
      <div className="flex gap-4">
        {socialList.map((social) => {
          const id = Object.entries(externalIds).find(
            ([key, value]) => key === social.id,
          );
          return (
            <div key={social.id} className="flex items-center gap-2">
              <Link
                href={`${social.url}${id ? id[1] : ""}`}
                className="text-sm font-semibold"
              >
                <Image
                  src={social.icon}
                  width={40}
                  height={40}
                  alt={social.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
