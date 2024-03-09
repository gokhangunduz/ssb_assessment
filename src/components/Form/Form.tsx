import { ReactElement } from "react";
import Card from "../Card/Card";

export default function Form(): ReactElement {
  return (
    <Card>
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Card>
  );
}
