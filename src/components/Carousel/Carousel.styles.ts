import styled from "styled-components";

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Track = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  @media (min-width: 768px) {
    gap: 16px;
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 18px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const PreviousButton = styled(NavButton)`
  left: 8px;
`;

export const NextButton = styled(NavButton)`
  right: 8px;
`;
