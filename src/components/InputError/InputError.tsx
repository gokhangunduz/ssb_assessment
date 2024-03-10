import { Fragment, ReactElement } from "react";

interface IInputError {
  error?: string;
}

export default function InputError({ error }: IInputError): ReactElement {
  return (
    <Fragment>
      {error && (
        <p className="text-xs absolute w-full text-center -bottom-6 left-6 text-red-500">
          {error}
        </p>
      )}
    </Fragment>
  );
}
