import { Wrapper } from "./StatusMessage.styles";

interface StatusMessageProps {
  message: string;
}

const StatusMessage = ({ message }: StatusMessageProps) => (
  <Wrapper role="status" aria-live="polite">
    {message}
  </Wrapper>
);

export default StatusMessage;
