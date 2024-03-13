"use client";

import React, { useState } from "react";
import NotificationsIcon from "../icons/notifications-icon";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import GiftIcon from "../icons/gift-icon";

const notifications = [
  {
    icon: "gift",
    message: "Soledad Martínez canjeó su código!",
  },
  {
    icon: "gift",
    message: "Rosina Cataldo canjeó su código!",
  },
];
const Notifications: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // to simplify I will use a boolean, but in a real app this would be a list of notifications
  const [unreadNotifications, setUnreadNotifications] = useState(true);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
    setUnreadNotifications((prevState) => !prevState);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button onClick={handleIconClick}>
          <NotificationsIcon unreadNotifications={unreadNotifications} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="flex flex-col">
          {notifications.map((notification, index) => (
            <>
              <div key={index} className="flex flex-row items-center">
                <GiftIcon />
                <p className="ml-2 text-sm font-light leading-tight text-black">
                  {notification.message}
                </p>
              </div>
              {index !== notifications.length - 1 && (
                <div className="my-2 border-b-[0.5px] border-black"></div>
              )}
            </>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
