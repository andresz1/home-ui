#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";
import docgen from "react-docgen-typescript";

const run = async ({ pattern, outputDir, options = {} }) => {
  const files = await glob(pattern);

  const output = files.reduce((acc, path) => {
    const docs = docgen.parse(path, {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        const prohibitedPropsRegexesNew = [
          /\/node_modules\/@types\/react\/.*.d.ts/,
        ];

        if (prop.declarations && prop.declarations?.length > 0) {
          const isProhibitedProps = prop.declarations.some((declaration) =>
            prohibitedPropsRegexesNew.some((regex) =>
              regex.test(declaration.fileName)
            )
          );

          return !isProhibitedProps;
        }

        return true;
      },
      ...options,
    });

    return [...acc, ...docs];
  }, []);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(
    `${outputDir}/docgen.json`,
    JSON.stringify(output, null, 2),
    "utf-8"
  );
};

run({ pattern: "./src/*/index.tsx", outputDir: "./dist" });
