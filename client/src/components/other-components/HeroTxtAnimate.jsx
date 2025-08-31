import { TextAnimate } from "../magicui/text-animate";

export function BannerTextAnimate() {
  return (
    <TextAnimate animation="slideLeft" by="word" as="h1" duration={1} className="text-3xl md:text-5xl font-bold mb-4 capitalize" once>
      Shop smarter, eat fresher, live better.
    </TextAnimate>
  );
}
