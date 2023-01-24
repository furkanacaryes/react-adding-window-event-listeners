import { FC } from "react";

import { useWindowEvent } from "src/lib/utils";

import { useOwnStore } from "./helpers";
import "./styles.css";

export const Counter: FC = () => {
  const { count, decreaseCount, increaseCount } = useOwnStore();

  const eventType = "keypress";

  const eventHandler = () => {
    alert(`The count value in the handler scope is: ${count}`);
  };

  useWindowEvent(eventType, eventHandler);

  return (
    <section>
      <div className="counter">
        <button onClick={decreaseCount}>-</button>

        <div>{count}</div>

        <button onClick={increaseCount}>+</button>
      </div>

      <span>Press any key to trigger the handler({eventType})</span>
    </section>
  );
};
