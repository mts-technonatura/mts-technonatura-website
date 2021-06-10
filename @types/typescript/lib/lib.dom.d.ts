interface Window {
  gtag: (
    event: string,
    action?: string,
    obj: {
      event_category?: string;
      event_label?: string;
      value?: number;
      page_path?: URL;
    },
  ) => void;
}
