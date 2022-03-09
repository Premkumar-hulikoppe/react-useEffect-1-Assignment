
import { nanoid } from "nanoid";

export const TodoList = ({ data, remove, togleTodo}) => {
  return (
    <div className="todoList">
      <table border="1px solid black">
        <thead>
          <tr>
            <th>Serail No.</th>
            <th>Grocery Item</th>
            <th>Status</th>
            <th>Toggle Option</th>
            <th>Delete Option</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, ind) => (
            <tr key = {nanoid()}>
              <td>{ind + 1}</td>
              <td> {e.title} </td>
              <td>{e.status ? "Taken" : "Not Taken"}</td>
              <td>
                <button className = {"toggle"} onClick = {() => {
                    togleTodo(e);
                }}>Toggle Item</button>
              </td>
              <td>
              <button className = {"remove"} onClick = {() => {
                  remove(e.id);
                }}>Delete Item</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
