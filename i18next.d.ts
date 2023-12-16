// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import en from "@translations/en.json";
import it from "@translations/it.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "ns1";
    // custom resources type
    resources: {
      ns1: typeof en;
      ns2: typeof it;
    };
    // other
  }
}