import { Box } from "@chakra-ui/layout";
import React, { useState, VFC } from "react";

export const TaggedList: VFC<{ tags: string[] }> = ({ tags }) => {
  const [tagList, setTagList] = useState(tags)
  return (
    <Box>
      {tagList.map(tag =>
        
        )}
    </Box>
  )
}
