import React, { useState } from "react";
interface newReminderProps {
  onAddReminder: (title: string) => void;
}

const NewReminder = ({ onAddReminder }: newReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if(title === ""){
      return;
    }
    onAddReminder(title);
    setTitle("")
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
