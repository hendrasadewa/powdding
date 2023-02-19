import clsx from 'clsx';
import AlertIcon from './AlertIcon';
import { ALERT_TYPE } from './types';

interface Props {
  message?: string;
  type?: ALERT_TYPE;
  onClick?: () => void;
}

export default function Alert({ message, type, onClick }: Props) {
  if (!message) {
    return null;
  }

  return (
    <div
      className={clsx('alert shadow-lg', type ? `alert-${type}` : '')}
      onClick={onClick}
    >
      <div>
        <AlertIcon type={type} />
        <span>{message}</span>
      </div>
    </div>
  );
}
