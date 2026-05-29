"use client";

import { useEffect } from "react";

interface ArticleSchemaProps {
  schema: Record<string, unknown>;
}

export default function ArticleSchema({ schema }: ArticleSchemaProps) {
  useEffect(() => {
    const scriptId = "json-ld-structured-data";
    
    // Remove existing script if present
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and inject new script
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema]);

  return null;
}
