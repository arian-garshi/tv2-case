import styled from "styled-components";

export const IconOverlay = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 16px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease, background 0.2s ease;
  pointer-events: none;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const FavoriteIcon = styled.span<{ $active: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 16px;
  color: #e74c3c;
  z-index: 2;
  display: ${({ $active }) => ($active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-drag: none;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2a2a2a;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  padding: 12px;
`;

export const Title = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 8px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  color: white;
  font-size: 15px;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const Card = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 130px;
  height: 195px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 180px;
    height: 260px;
  }

  &:hover ${Poster} {
    transform: scale(1.05);
  }

  &:hover ${Title} {
    opacity: 1;
  }

  &:hover ${IconOverlay} {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${FavoriteIcon} {
    display: none;
  }
`;
