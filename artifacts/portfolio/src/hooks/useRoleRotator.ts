import { useState, useEffect } from "react";

export function useRoleRotator(roles: string[], interval = 2800) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, interval);
    return () => clearInterval(id);
  }, [roles.length, interval]);

  return { current: roles[index] ?? "", index };
}
