"use client";

import { useState } from "react";
import { cn, getYouTubeEmbedUrl } from "@/lib/utils";

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  className?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

export function YouTubeEmbed({
  url,
  title = "YouTube video",
  className,
  aspectRatio = "16/9",
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="flex items-center justify-center p-8 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">Invalid YouTube URL</p>
      </div>
    );
  }

  const aspectRatioClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  }[aspectRatio];

  return (
    <div className={cn("relative w-full overflow-hidden rounded-lg", aspectRatioClass, className)}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          <div className="text-sm text-muted-foreground">Loading video...</div>
        </div>
      )}
      <iframe
        src={`${embedUrl}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
