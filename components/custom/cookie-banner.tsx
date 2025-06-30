"use client";
import { useCallback, useEffect } from "react";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "../ui/button";

export default function CookieBanner() {
  const [cookie, setCookie] = useLocalStorage<boolean | null>(
    "cookieConsent",
    null
  );

  const handleAccept = useCallback((id: string | number) => {
    setCookie(true);
    toast.dismiss(id);
  }, []);

  const handleDecline = useCallback((id: string | number) => {
    setCookie(false);
    toast.dismiss(id);
  }, []);

  useEffect(() => {
    if (cookie === null) {
      const toastId = toast(
        <div className="space-y-4">
          <p>
            We use cookies to ensure you get the best experience on our website.
            The main use of our cookie is Google Analytics.
          </p>
          <div className="space-y-2">
            <p className="text-foreground/60">
              By clicking "Accept", you agree to our use of cookies.
            </p>
            {/* <Link href={"/cookie"} className="text-primary underline">
              Lean more
            </Link> */}
          </div>
          <div className="space-x-2">
            <Button onClick={() => handleAccept(toastId)}>Accept</Button>
            <Button variant={"outline"} onClick={() => handleDecline(toastId)}>
              Decline
            </Button>
          </div>
        </div>,
        {
          dismissible: false,
          closeButton: false,
          duration: Infinity,
        }
      );
    }
  }, [cookie]);

  return <></>;
}
