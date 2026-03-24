import type { Metadata } from "next";
import { ShelbyIntakeForm } from "@/components/ShelbyIntakeForm";

export const metadata: Metadata = {
  title: "Discovery Questionnaire",
  robots: { index: false, follow: false },
};

export default function ShelbyIntakePage() {
  return <ShelbyIntakeForm />;
}
