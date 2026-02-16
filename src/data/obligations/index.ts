import { euAiActObligations } from "./eu-ai-act";
import { ukGdprObligations } from "./uk-gdpr";
import { icoAiObligations } from "./ico-ai-guidance";
import { nistAiRmfObligations } from "./nist-ai-rmf";
import { owaspGenaiObligations } from "./owasp-genai";
import { ukEqualityActObligations } from "./uk-equality-act";
import type { Obligation } from "@/types";

export {
  euAiActObligations,
  ukGdprObligations,
  icoAiObligations,
  nistAiRmfObligations,
  owaspGenaiObligations,
  ukEqualityActObligations,
};

export const allObligations: Obligation[] = [
  ...euAiActObligations,
  ...ukGdprObligations,
  ...icoAiObligations,
  ...nistAiRmfObligations,
  ...owaspGenaiObligations,
  ...ukEqualityActObligations,
];
