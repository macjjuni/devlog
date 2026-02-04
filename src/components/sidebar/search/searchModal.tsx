import { memo } from "react";
// Temporarily disabled for Next.js 16 upgrade
// Original implementation uses kku-ui components

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SearchHistoryType {
  text: string;
  date: number;
}

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  return null; // Temporarily disabled
}

export default memo(SearchModal);
