import { Box } from "@mui/material"
import React, { ReactElement } from "react"

interface YoutubeEmbedProps {
  embedId: string,
}

export default function youtubeEmbed({embedId}: YoutubeEmbedProps): ReactElement{
  return (
    <Box
        width="100%"
        // height="100%"
    >
      <iframe
        width="100%"
        height="600"
        max-height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  )
}
