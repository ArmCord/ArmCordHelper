import {c} from "./logger"
import {showToast} from "@cumcord/ui/toasts"
import * as rightclick from "./patches/rightclick"
export default (data) => {
    return {
      onLoad() {
          c.log("Starting...")
          if (!window.armcord && window.DiscordNative) {
                c.warn("Not in ArmCord.")
                showToast({title: "ArmCord Helper can't detect native bridge!", content: "It seems that you're running this plugin inside official Discord client. It's meant to run inside ArmCord client. It won't work here due to missing APIs! Please remove this plugin and reload your client.", duration: 300000});
                return
          } else {
            showToast({title: "Welcome to ArmCord", duration: 3000});
            try {
            rightclick.start();
            c.log("Right-click patch has been injected.")} catch(e) {
                c.error(e)
            }
          }
      },
      onUnload() {
        rightclick.stop();
      }
    }
  }
