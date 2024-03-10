import { Fragment, ReactElement } from "react";

interface IInputError {
  error?: string;
}

export default function InputError({ error }: IInputError): ReactElement {
  return (
    <Fragment>
      {error && (
        <p className="text-xs absolute left-20 -bottom-6 text-red-500">
          {error}
        </p>
      )}
    </Fragment>
  );
}
