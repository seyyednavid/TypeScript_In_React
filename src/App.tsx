import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import ReminderService from "./services/ReminderService";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminders(title);
    setReminders((prevReminders) => [newReminder, ...prevReminders]);
  };
  console.log(reminders);
  return (
    <div className="app">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
