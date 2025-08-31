import { TextAnimate } from "../magicui/text-animate";

export function HeroSubTextAnimate() {
  return (
    <TextAnimate animation="slideUp" by="word" as="p" className="text-lg mb-4" once>
      Just one click to get farm-fresh groceries at your doorstep
    </TextAnimate>
  );
}
