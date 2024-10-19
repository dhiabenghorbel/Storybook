import React from "react";
import CircularButton from "./../CircularButton/CircularButton.tsx";
import LoadingSpinner from '../../Loading/LoadingSpinner.tsx'

interface TasksProps {
  /**
   * Number of elements
   */
  tasks: number,
  /**
   * Loading action while component finishing load
   */
  loading: boolean
}

const Tasks = ({ tasks, loading }: TasksProps) => {

  let content = false;
  if (tasks > 0) {
    content = loading ? <LoadingSpinner type="badge" /> : tasks;
  }

  return (
    <div>
      <CircularButton
        content={content}
        icon="envelope"
        value="label.task"
      />
    </div>
  );
};

Tasks.defaultProps = {
  tasks: 0,
  loading: false
}

export default Tasks;
