class NotificationService {
  async sendNotification(title, message) {
    let notificationResponse = await Notification.requestPermission();
    if (notificationResponse === "granted") {
      const options = {
        body: message,
      };
      new Notification(title, options);
    }
  }
}

export const notificationService = new NotificationService();
