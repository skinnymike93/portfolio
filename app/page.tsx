import { Home } from "@/components/Home";
import { createMetadata } from "@/lib/i18n/metadata";

export const metadata = createMetadata("es");

export default function Page() {
  return <Home locale="es" />;
}
