import { ReadOnlyField } from "../types/types";

export default function Field(props: ReadOnlyField) {
  return (
    <div className="sm:w-72 lg:w-60 flex gap-2 text-sm">
      <h3 className="font-semibold">{props.fieldName}</h3>
      <p className="font-light">{props.fieldValue}</p>
    </div>
  );
}
