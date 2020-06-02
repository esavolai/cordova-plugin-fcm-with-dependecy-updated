import { IonicNativePlugin, cordova } from "@ionic-native/core"
import { Observable } from "rxjs"
import type { INotificationPayload } from "../../typings/INotificationPayload"
import { FCMPlugin } from "../www/FCMPlugin"

export class FCMPluginOnIonic extends FCMPlugin {
  public static pluginName: string = "FCM"
  public static plugin: string = "cordova-plugin-fcm-with-dependecy-updated"
  public static pluginRef: string = "FCMPlugin"
  public static repo: string =
    "https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated"
  public static platforms: string[] = ["Android", "iOS"]
  public static installed: () => boolean = IonicNativePlugin.installed
  public static getPlugin: () => any = IonicNativePlugin.getPlugin
  public static getPluginName: () => string = IonicNativePlugin.getPluginName
  public static getPluginRef: () => string = IonicNativePlugin.getPluginRef
  public static getPluginInstallName: () => string = IonicNativePlugin.getPluginInstallName
  public static getSupportedPlatforms: () => string[] = IonicNativePlugin.getSupportedPlatforms

  /**
   * Event firing when receiving new notifications
   *
   * @returns {Observable<INotificationPayload>} An object to listen for notification data
   */
  public onNotification(): Observable<INotificationPayload> {
    return cordova(
      this,
      "onNotification",
      { eventObservable: true, element: this.eventTarget, event: "notification" },
      arguments
    )
  }

  /**
   * Event firing when receiving a new Firebase token
   *
   * @returns {Observable<string>} An object to listen for the token
   */
  public onTokenRefresh(): Observable<string> {
    return cordova(
      this,
      "onTokenRefresh",
      { eventObservable: true, element: this.eventTarget, event: "tokenRefresh" },
      arguments
    )
  }
}