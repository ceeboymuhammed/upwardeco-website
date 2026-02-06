export {};

type HubSpotCreateFormOptions = {
  region?: string;
  portalId: string;
  formId: string;
  target: string;

  // Optional HubSpot props (safe to include)
  formInstanceId?: string;
  onFormReady?: (form: HTMLFormElement) => void;
  onFormSubmitted?: (form: HTMLFormElement) => void;
};

type HubSpotFormsApi = {
  create: (opts: HubSpotCreateFormOptions) => void;
};

type HubSpotGlobal = {
  forms: HubSpotFormsApi;
};

declare global {
  interface Window {
    hbspt?: HubSpotGlobal;
  }
}
