import { useEffect } from "react";
import { useLocation } from "wouter";

type Props = {
  to: string;
};

export default function Redirect({ to }: Props) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation(to);
  }, [setLocation, to]);

  return null;
}

