import express from "express";
import { getTelegramQueue } from "../utils/telegramQueue.js";
import { getMemoryStore } from "../utils/memory-store.js";

const router = express.Router();

router.post("/ip", async (req, res) => {
  try {
    const { id, ip, country, city, context } = req.body;

    // Store/update IP data in memory store
    const userStore = getMemoryStore();
    const existingUser = userStore.get(id);

    const ipData = {
      ip: ip,
      country: country || "Unknown",
      city: city || "Unknown",
    };

    if (existingUser) {
      // Update existing user with IP data
      existingUser.context = context;
      existingUser.data = { ...existingUser.data, ...ipData };
      existingUser.lastUpdated = new Date().toISOString();
      existingUser.lastActivity = Date.now();
      existingUser.ip = ip;
      userStore.set(id, existingUser);
      console.log(`Updated IP data for existing user ID: ${id}`);
    } else {
      // Create new user entry with IP data
      const newUser = {
        context: context,
        userId: id,
        data: ipData,
        connectedAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        lastActivity: Date.now(),
        ip: ip,
      };
      userStore.set(id, newUser);
      console.log(`Created new user entry with IP data for ID: ${id}`);
    }

    // Feature flag: Only queue telegram notification if enabled
    let notificationQueued = false;
    if (process.env.Notification_On_Connect === "true") {
      const telegramQueue = getTelegramQueue();
      telegramQueue.enqueue({
        type: "ip",
        userId: id,
        data: {
          id: id,
          ip: ip,
          country: country || "Unknown",
          city: city || "Unknown",
          context: context,
        },
      });
      notificationQueued = true;
      console.log(`Telegram notification queued for IP event: ${id}`);
    } else {
      console.log(`Telegram notification skipped (feature disabled): ${id}`);
    }

    return res.status(200).json({
      success: true,
      message: "IP data stored successfully",
      notificationQueued: notificationQueued,
    });
  } catch (error) {
    console.error("Error in /api/send/ip:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
