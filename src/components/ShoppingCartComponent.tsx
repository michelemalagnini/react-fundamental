import { Icon } from "@iconify/react";
import "./ShoppingCart.css";

type Item = {
  id: number;
  label: string;
  purchased: boolean;
  higherPriority: boolean;
};

export function ShoppingCart() {
  const header = "Shopping List App - react";

  const items: Item[] = [
    {
      id: 1,
      label: "10 Apples",
      purchased: false,
      higherPriority: false,
    },
    {
      id: 2,
      label: "5 Bananas",
      purchased: false,
      higherPriority: false,
    },
  ];

  return (
    <>
      <h1>{header}</h1>
      <ul className="shopping-list">
        {items.map((item) => (
          <div key={item.id} className="list-item">
            <div className="list-item-content">
              <span className="item-text">
                {item.id} - {item.label}
              </span>
            </div>
            <button
              className="btn btn-cancel"
              aria-label="Delete"
            >
              <Icon icon="ic:baseline-remove" />
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
