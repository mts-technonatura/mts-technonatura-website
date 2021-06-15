export type statusMessage = 'success' | 'warning' | 'error' | 'info';

export type normalResponseT = {
  message: string;
  status: statusMessage;
};

export type APIResponse = {
  message: string;
  status: statusMessage;
};
