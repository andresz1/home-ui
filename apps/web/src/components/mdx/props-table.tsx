import { ComponentPropsWithoutRef } from "react";
import { InlineCode } from "../mdx/inline-code";
import { PropsTableCell } from "./props-table-cell";
import { PropsTableHeadingCell } from "./props-table-heading-cell";
import { PropsTableType } from "./props-table-type";

export interface PropsTable extends ComponentPropsWithoutRef<"table"> {
  docgen: {
    tags: Record<string, any>;
    filePath: string;
    description: string;
    displayName: string;
    methods: Record<string, any>;
    props: Record<string, any>;
  };
}

export const PropsTable = ({ docgen }: PropsTable) => {
  if (!docgen) {
    return (
      <div className="mb-3xl rounded-md bg-error-container px-xl py-lg font-bold text-on-error-container">
        <p>Error: props data cannot be retrieved</p>
      </div>
    );
  }

  if (!Object.keys(docgen.props).length) {
    return (
      <div className="mb-3xl rounded-md bg-alert-container px-xl py-lg font-bold text-on-alert-container">
        <p>This component does not have any props</p>
      </div>
    );
  }

  return (
    <div className="mb-3xl overflow-x-auto overflow-y-hidden not-prose">
      <table className="border-spacing-0 w-full border-collapse">
        <thead>
          <tr>
            <PropsTableHeadingCell className="rounded-l-md">
              Attribute
            </PropsTableHeadingCell>

            <PropsTableHeadingCell>Type</PropsTableHeadingCell>

            <PropsTableHeadingCell>Description</PropsTableHeadingCell>

            <PropsTableHeadingCell className="rounded-r-md">
              Default
            </PropsTableHeadingCell>
          </tr>
        </thead>

        <tbody>
          {Object.entries(docgen.props).map((prop) => {
            const [name, data] = prop;

            return (
              <tr
                key={name}
                className="[&:nth-child(even)]:bg-background-variant"
              >
                <PropsTableCell>
                  {name}
                  {data.required ? "*" : ""}
                </PropsTableCell>

                <PropsTableCell>
                  <PropsTableType propType={data.type} />
                </PropsTableCell>

                <PropsTableCell>{data.description || "-"}</PropsTableCell>

                <PropsTableCell>
                  <InlineCode>
                    {data.defaultValue?.value ||
                      JSON.stringify(data.defaultValue)}
                  </InlineCode>
                </PropsTableCell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
