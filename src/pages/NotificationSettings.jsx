// src/pages/NotificationSettings.jsx
import React, { useState } from "react";
import Button from "../components/Button";

const NotificationSettings = () => {
  const [hotelNotify, setHotelNotify] = useState(true);
  const [adventureNotify, setAdventureNotify] = useState(true);

  const handleSave = () => {
    // You can integrate Redux or API call here
    alert("Preferences saved!");
  };

  return (
    <div className="min-h-screen p-6 bg-[#F3F4FF]">
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={hotelNotify}
              onChange={() => setHotelNotify(!hotelNotify)}
              className="accent-blue-600"
            />
            Notify me when a hotel is approved
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={adventureNotify}
              onChange={() => setAdventureNotify(!adventureNotify)}
              className="accent-blue-600"
            />
            Notify me when an adventure is approved
          </label>
        </div>
        <div className="mt-6 text-right">
          <Button
            onClick={handleSave}
            variant="primary"
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
