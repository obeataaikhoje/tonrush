import "@telegram-apps/telegram-ui/dist/styles.css";
import { AppRoot, Button, Placeholder } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import TonButton from "./ButtonConnect";
import "../src/output.css";

function AppDemo() {
  return (
    <AppRoot>
      <Placeholder header="TonRush" description="TON Affiliates Pool">
        <img
          alt="Telegram sticker"
          src="logo.jpg"
          style={{ display: "block", width: "144px", height: "144px" }}
          className="rounded-full"
        />
        <div className="flex items-center justify-between p-4">
          <p className="text-slate-200 inline-block">3,900 monthly Users</p>
          <p>@tonrush</p>
        </div>
      </Placeholder>
      <Placeholder className="mb-10">
        <Button mode="filled">Connect Wallet</Button>
      </Placeholder>
    </AppRoot>
  );
}

export default AppDemo;
