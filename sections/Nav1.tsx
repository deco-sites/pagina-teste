import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  list?: {
    listItem: string;
    listItemArray: string[];
  };
}

export default function Footer(
  { image, href, text, alt, height, width, list }: Props,
) {
  const defaultImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee";
  const defaultHref = "https://deco.cx/";
  const defaultText = "Made with";
  const defaultAlt = "Made with deco.cx";
  const defaultHeight = 20;
  const defaultWidth = 50;
  const defaultList = {
    listItem: "1",
    listItemArray: ["1", "2"],
  };

  return (
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <a
        href={href || defaultHref}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text || defaultText}</p>}
        {list && <div>{list || defaultList}</div>}
        {image && (
          <Image
            src={image || defaultImage}
            alt={alt || defaultAlt}
            height={height || defaultHeight}
            width={width || defaultWidth}
          />
        )}
      </a>
    </div>
  );
}