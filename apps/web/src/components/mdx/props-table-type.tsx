import { InlineCode } from "./inline-code";

export interface PropsTableTypeProps {
  propType: {
    name: string;
    value: { value: string }[];
  };
}

export const PropsTableType = ({ propType }: PropsTableTypeProps) => {
  if (propType.name === "enum") {
    return propType.value.map(({ value }, i) => {
      return (
        <>
          {i > 0 && " | "}
          <InlineCode key={i}>{value}</InlineCode>
        </>
      );
    });
  }

  return <InlineCode>{propType.name}</InlineCode>;
};
