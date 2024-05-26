import { useSearchParams } from "next/navigation";

export default function useSearchText() {
  return useSearchParams().get("q");
}
