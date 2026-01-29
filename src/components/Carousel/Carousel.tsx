import { useRef, type ReactNode } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDragScroll } from "../../hooks/useDragScroll";
import {
  SectionHeader,
  SectionTitle,
  Container,
  Track,
  PreviousButton,
  NextButton,
} from "./Carousel.styles";

interface CarouselProps {
  children: ReactNode;
  title?: string;
  headerRight?: ReactNode;
}

const Carousel = ({ children, title, headerRight }: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useDragScroll(trackRef);

  const scrollLeft = () =>
    trackRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  const scrollRight = () =>
    trackRef.current?.scrollBy({ left: 600, behavior: "smooth" });

  return (
    <div>
      {title && (
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
          {headerRight}
        </SectionHeader>
      )}
      <Container role="region" aria-label={title ?? "Movie carousel"}>
        <PreviousButton onClick={scrollLeft} aria-label="Scroll left">
          <FiChevronLeft />
        </PreviousButton>
        <Track ref={trackRef}>{children}</Track>
        <NextButton onClick={scrollRight} aria-label="Scroll right">
          <FiChevronRight />
        </NextButton>
      </Container>
    </div>
  );
};

export default Carousel;
