import Reminder from "../models/Reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.title}
            <button
              className="btn btn-outline-danger"
              onClick={() => onRemoveReminder(item.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ReminderList;
