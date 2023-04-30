import styled from '@emotion/styled';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const StyledlModal = styled.div`
  display: flex;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  border-radius: 15px;
  overflow: hidden;
  & > img {
    object-fit: cover;
    object-position: center;
  }
`;
