import { createMetadata } from "@/lib/i18n/metadata";

export const metadata = createMetadata("en");

export default function EnLayout({ children }: LayoutProps<"/en">) {
  return children;
}
