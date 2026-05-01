"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";

interface ProfileActionsProps {
  profileUrl: string;
}

export function ProfileActions({ profileUrl }: ProfileActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = profileUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Follow Button - Redirects to login */}
      <Link href="/login">
        <Button 
          size="lg" 
          className="rounded-full bg-[#BFFF00] px-8 py-2.5 text-sm font-semibold text-black hover:bg-[#d4ff4d]"
        >
          Follow
        </Button>
      </Link>

      {/* Share Button - Copies URL */}
      <Button 
        size="lg" 
        variant="outline"
        onClick={handleShare}
        className="rounded-full border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900"
      >
        {copied ? (
          <>
            <Check className="mr-2 h-4 w-4 text-green-600" />
            Copied!
          </>
        ) : (
          <>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </>
        )}
      </Button>
    </div>
  );
}
