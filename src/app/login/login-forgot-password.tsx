import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoginForgotPasswordAccordion() {
  const command = "sudo unbound-ui-cli -a -p";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="forgot-password">
        <AccordionTrigger className="text-sm underline">
          Forgot your password?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            After installing <strong>unbound-web-ui</strong> for the first time,
            a password is generated and displayed to the user. The password
            cannot be retrieved later on, but it is possible to set a new
            password (or explicitly disable the password by setting an empty
            password) using the command
          </p>
          <div className="flex items-center mt-2 bg-gray-100 p-2 rounded">
            <code className="text-sm pl-2">{command}</code>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="ml-auto"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
